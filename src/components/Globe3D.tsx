import { Canvas } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useEffect, useMemo, useRef, useState } from "react";
import { ATLAS } from "../data/atlas";
type ATLASCountry = (typeof ATLAS)[number];

type Globe3DProps = {
  atlas: ATLASCountry[];
  onSelect: (countrySlug: string, citySlug: string) => void;
};

// Геометрия SphereGeometry: phi вокруг Y, theta сверху-вниз
function latLngToVec3(lat: number, lng: number, r: number) {
  const theta = THREE.MathUtils.degToRad(90 - lat);   // 0..PI
  const phi = THREE.MathUtils.degToRad(lng + 180);    // 0..2PI

  const x = -r * Math.cos(phi) * Math.sin(theta);
  const z =  r * Math.sin(phi) * Math.sin(theta);
  const y =  r * Math.cos(theta);
  return new THREE.Vector3(x, y, z);
}

function GlobeMesh({
  points,
  onPick,
}: {
  points: { id: string; pos: THREE.Vector3; color: string; payload: { country: string; city: string } }[];
  onPick: (country: string, city: string) => void;
}) {
  const group = useRef<THREE.Group>(null);
  const [hoverId, setHoverId] = useState<string | null>(null);

  const globeTexture = useTexture(`${import.meta.env.BASE_URL}globe-texture.png`);

  useEffect(() => {
    globeTexture.colorSpace = THREE.SRGBColorSpace;
    globeTexture.anisotropy = 8;
    globeTexture.needsUpdate = true;
  }, [globeTexture]);

  return (
    <group ref={group}>
      <mesh>
        <sphereGeometry args={[1, 96, 96]} />
        <meshStandardMaterial map={globeTexture} color="#ffffff" roughness={0.9} metalness={0.05} />
      </mesh>

      <mesh>
        <sphereGeometry args={[1.002, 40, 40]} />
        <meshBasicMaterial color="#ffffff" wireframe opacity={0.06} transparent />
      </mesh>

      {points.map((p) => (
        <mesh
          key={p.id}
          position={p.pos}
          onPointerOver={(e) => {
            e.stopPropagation();
            setHoverId(p.id);
          }}
          onPointerOut={(e) => {
            e.stopPropagation();
            setHoverId(null);
          }}
          onClick={(e) => {
            e.stopPropagation();
            onPick(p.payload.country, p.payload.city);
          }}
        >
          <sphereGeometry args={[hoverId === p.id ? 0.03 : 0.022, 16, 16]} />
          <meshStandardMaterial
            color={p.color}
            emissive={p.color}
            emissiveIntensity={hoverId === p.id ? 1.2 : 0.5}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function Globe3D({ atlas, onSelect }: Globe3DProps) {
  const points = useMemo(() => {
    const out: { id: string; pos: THREE.Vector3; color: string; payload: { country: string; city: string } }[] = [];
    for (const c of atlas) {
      for (const ct of c.cities) {
        if (ct.lat == null || ct.lng == null) continue;
        const open = ct.status === "open";
        out.push({
          id: `${c.slug}:${ct.slug}`,
          pos: latLngToVec3(ct.lat, ct.lng, 1.03),
          color: open ? "#ffb86b" : "rgba(255,255,255,0.25)",
          payload: { country: c.slug, city: ct.slug },
        });
      }
    }
    return out;
  }, [atlas]);

  return (
    <div className="globeWrap">
      <Canvas style={{ width: "100%", height: "100%" }} camera={{ position: [0, 0, 3.2], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 2, 3]} intensity={1.2} />
        <GlobeMesh points={points} onPick={onSelect} />
        <OrbitControls enablePan={false} minDistance={2.2} maxDistance={4.0} />
      </Canvas>
    </div>
  );
}
