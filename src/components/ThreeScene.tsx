import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Layers, Users, ShieldCheck, Sparkles, RotateCw, Info, ExternalLink, Bot, CheckCircle2, ArrowRight } from 'lucide-react';

export interface SceneNodeData {
  id: string;
  name: string;
  category: 'legacy' | 'embedded-role' | 'bridge' | 'ai';
  roleKey?: 'csr' | 'bdr' | 'am' | 'ae';
  position: [number, number, number];
  color: number;
  description: string;
  status: string;
  metric: string;
  slaResponse: string;
  roleBadge?: string;
  deliverables: {
    daily: string;
    weekly: string;
    biWeekly: string;
    quarterly: string;
  };
}

const SCENE_NODES: SceneNodeData[] = [
  // Scene 1: Legacy Enterprise Platforms (Kept 100% Intact)
  {
    id: 'legacy-salesforce',
    name: 'Client Salesforce & CRM',
    category: 'legacy',
    position: [-4.4, 1.6, -1.2],
    color: 0x3b82f6, // Salesforce Blue
    description: 'Existing enterprise CRM and pipeline database. Embedded BDRs and AEs work directly inside your instances with zero schema alterations.',
    status: 'Preserved & Untouched',
    metric: '100% System Continuity',
    slaResponse: '< 15 min SLA Response',
    deliverables: {
      daily: 'Real-time CRM lead routing & pipeline stage updates',
      weekly: 'Weekly Operations Review & pipeline velocity audit',
      biWeekly: 'Bi-Weekly Strategic Sprint & sequence optimization',
      quarterly: 'Quarterly Business Review (QBR) & executive ROI presentation',
    },
  },
  {
    id: 'legacy-hubspot',
    name: 'Client HubSpot & Marketing',
    category: 'legacy',
    position: [-4.2, -1.4, 0.8],
    color: 0xf97316, // HubSpot Orange
    description: 'Active marketing automation and customer ticketing. Our CSRs and BDRs integrate into your existing ticket pipelines immediately.',
    status: 'Seamless Overlay',
    metric: 'Zero Workflow Friction',
    slaResponse: '< 15 min SLA Response',
    deliverables: {
      daily: 'Ticket triage & outbound lead follow-up within 15 min',
      weekly: 'Weekly Operations Review & CSAT resolution benchmarks',
      biWeekly: 'Bi-Weekly Strategic Sprint & knowledge base sync',
      quarterly: 'Quarterly Business Review (QBR) & churn mitigation analysis',
    },
  },
  {
    id: 'legacy-slack',
    name: 'Client Slack & Teams Hub',
    category: 'legacy',
    position: [-2.8, 2.4, 1.4],
    color: 0x4a154b, // Slack Aubergine
    description: 'Every placed professional operates in your Slack Enterprise or Teams channels, joining daily standups as a genuine team member.',
    status: 'Embedded Daily Presence',
    metric: 'Real-Time Standup Sync',
    slaResponse: '< 15 min SLA Response',
    deliverables: {
      daily: 'Daily 8:00 AM standup participation & direct channel triage',
      weekly: 'Weekly Operations Review with Engagement Director',
      biWeekly: 'Bi-Weekly Strategic Sprint & cross-functional retro',
      quarterly: 'Quarterly Business Review (QBR) & annual partnership alignment',
    },
  },

  // Pragmatic Bridge Ingestion Bus
  {
    id: 'pragmatic-bridge',
    name: 'Pragmatic Integration Bridge',
    category: 'bridge',
    position: [-1.4, 0.4, 0],
    color: 0x9f1239, // Deep Wine Crimson Accent
    description: 'Our proprietary operational layer overlays your communication and CRM tools without forcing costly migrations or procedural overhauls.',
    status: 'Non-Disruptive Overlay',
    metric: 'Sub-15ms Roundtrip Latency',
    slaResponse: '< 15 min SLA Response',
    deliverables: {
      daily: 'Automated data integrity checks & event telemetry sync',
      weekly: 'Weekly Operations Review on API throughput & uptime',
      biWeekly: 'Bi-Weekly Strategic Sprint for adapter calibration',
      quarterly: 'Quarterly Business Review (QBR) & architecture audit',
    },
  },

  // Scene 2: 4 Embedded Talent Roles (Metallic & Glass finish with Wine Red illumination)
  {
    id: 'role-csr',
    name: 'CSR · Customer Support Rep',
    category: 'embedded-role',
    roleKey: 'csr',
    position: [1.6, 2.1, -1.0],
    color: 0x881337, // Rich Wine
    roleBadge: 'White-Glove Support',
    description: 'Dedicated client onboarding, premium customer support, SLA preservation, and rapid escalation management directly in your Zendesk/HubSpot.',
    status: 'Active Embedded Pod',
    metric: '98.8% CSAT · 84.2% FCR',
    slaResponse: '< 15 min SLA Response',
    deliverables: {
      daily: 'Immediate ticket triage with guaranteed < 15 min SLA response',
      weekly: 'Weekly Operations Review covering ticket resolution speed & CSAT',
      biWeekly: 'Bi-Weekly Strategic Sprint for documentation & onboarding health',
      quarterly: 'Quarterly Business Review (QBR) analyzing retention trends & churn mitigation',
    },
  },
  {
    id: 'role-bdr',
    name: 'BDR · Business Development Rep',
    category: 'embedded-role',
    roleKey: 'bdr',
    position: [1.8, -1.8, 1.4],
    color: 0x9f1239, // Deep Wine Accent
    roleBadge: 'Outbound Pipeline',
    description: 'Cold outreach execution, Apollo.io/Sales Nav prospecting, lead qualification, and C-level discovery call scheduling aligned with your ICP.',
    status: 'Dedicated Outbound',
    metric: '35+ Qualified Calls / mo',
    slaResponse: '< 15 min SLA Response',
    deliverables: {
      daily: 'Multi-touch prospecting & MEDDPICC qualification into AE pipelines',
      weekly: 'Weekly Operations Review auditing outbound pacing & lead quality',
      biWeekly: 'Bi-Weekly Strategic Sprint optimizing copy, ICP & battlecards',
      quarterly: 'Quarterly Business Review (QBR) detailing total qualified pipeline & CAC ROI',
    },
  },
  {
    id: 'role-am',
    name: 'AM · Strategic Account Manager',
    category: 'embedded-role',
    roleKey: 'am',
    position: [3.4, 1.4, 1.2],
    color: 0x4a0e17, // Deep Wine Primary
    roleBadge: 'Retention & Growth',
    description: 'Client relationship nurturing, portfolio health monitoring, upselling execution, and proactive account churn mitigation.',
    status: 'Strategic Alignment',
    metric: '98.5% Client Retention',
    slaResponse: '< 15 min SLA Response',
    deliverables: {
      daily: 'Portfolio health monitoring & proactive churn risk detection',
      weekly: 'Weekly Operations Review evaluating renewal timelines & expansion opps',
      biWeekly: 'Bi-Weekly Strategic Sprint on champion mapping & feature adoption',
      quarterly: 'Quarterly Business Review (QBR) with client C-suite, Net Revenue Retention (NRR)',
    },
  },
  {
    id: 'role-ae',
    name: 'AE · Enterprise Account Executive',
    category: 'embedded-role',
    roleKey: 'ae',
    position: [3.6, -1.0, -1.2],
    color: 0xbe123c, // Wine Bright Metallic
    roleBadge: 'Enterprise Closer',
    description: 'High-value deal negotiations, MEDDPICC qualification, multi-stakeholder presentations, and high-tier contract closing.',
    status: 'Revenue Generation',
    metric: '38.6% Win Rate on Opps',
    slaResponse: '< 15 min SLA Response',
    deliverables: {
      daily: 'High-touch enterprise discovery & Mutual Action Plan execution',
      weekly: 'Weekly Operations Review on deal stages & procurement milestones',
      biWeekly: 'Bi-Weekly Strategic Sprint calibrating competitive concessions & pricing',
      quarterly: 'Quarterly Business Review (QBR) on closed-won revenue & sales velocity',
    },
  },

  // Scene 3: Embedded AI Operations Assistant
  {
    id: 'ai-operations-core',
    name: 'Embedded AI Operations Assistant',
    category: 'ai',
    position: [5.2, 0.4, 0],
    color: 0xe11d48, // Glowing Rose/Wine
    description: 'Floating operational engine generating automated 8:00 AM daily standup summaries, call sentiment analytics, and real-time SLA telemetry.',
    status: 'Continuous Synthesis',
    metric: '8:00 AM Standup Briefs',
    slaResponse: '< 15 min SLA Response',
    deliverables: {
      daily: 'Automated 8:00 AM daily standup brief & task priority dispatch',
      weekly: 'Weekly Operations Review synthesizing team throughput & SLA metrics',
      biWeekly: 'Bi-Weekly Strategic Sprint tuning telemetry & predictive alerts',
      quarterly: 'Quarterly Business Review (QBR) compiling board-ready ROI reports',
    },
  },
];

interface ThreeSceneProps {
  onOpenAiConsole: () => void;
  onSelectRole?: (roleKey: 'csr' | 'bdr' | 'am' | 'ae') => void;
}

export const ThreeScene: React.FC<ThreeSceneProps> = ({ onOpenAiConsole, onSelectRole }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedNode, setSelectedNode] = useState<SceneNodeData>(SCENE_NODES[4]); // Default to CSR
  const [activeView, setActiveView] = useState<'panoramic' | 'roles' | 'bridges' | 'ai'>('panoramic');
  const [isRotating, setIsRotating] = useState(true);
  const [packetSpeed, setPacketSpeed] = useState<number>(1);
  const [webglError, setWebglError] = useState(false);

  const cameraTargetRef = useRef({
    camPos: new THREE.Vector3(0, 4.2, 9.5),
    lookTarget: new THREE.Vector3(0, 0, 0),
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    } catch (e) {
      console.error('WebGL context failed:', e);
      setWebglError(true);
      return;
    }

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x121214, 0.038); // Obsidian fog

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 4.2, 9.5);

    // Three-point Studio Lighting with Deep Wine Red atmospheric fill
    const ambientLight = new THREE.AmbientLight(0x2d2d32, 2.0);
    scene.add(ambientLight);

    // Warm Key Light
    const keyLight = new THREE.DirectionalLight(0xfff1f2, 3.2);
    keyLight.position.set(8, 12, 8);
    keyLight.castShadow = true;
    scene.add(keyLight);

    // Deep Wine Red Accent Fill Light
    const wineFillLight = new THREE.PointLight(0x9f1239, 4.5, 30);
    wineFillLight.position.set(2, 4, 3);
    scene.add(wineFillLight);

    // Rim highlight light
    const rimLight = new THREE.DirectionalLight(0x4a0e17, 3.0);
    rimLight.position.set(-8, 6, -8);
    scene.add(rimLight);

    // Ground reflector grid
    const gridHelper = new THREE.GridHelper(26, 26, 0x3f3f46, 0x27272a);
    gridHelper.position.y = -2.6;
    scene.add(gridHelper);

    // Obsidian Disc Base
    const floorGeo = new THREE.CircleGeometry(13, 64);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x121214,
      roughness: 0.35,
      metalness: 0.85,
    });
    const floorMesh = new THREE.Mesh(floorGeo, floorMat);
    floorMesh.rotation.x = -Math.PI / 2;
    floorMesh.position.y = -2.62;
    floorMesh.receiveShadow = true;
    scene.add(floorMesh);

    const systemGroup = new THREE.Group();
    scene.add(systemGroup);

    const nodeMeshes: THREE.Mesh[] = [];

    // Create 3D Nodes
    SCENE_NODES.forEach((node) => {
      let geometry: THREE.BufferGeometry;

      if (node.category === 'legacy') {
        // Rounded box for client platforms (Salesforce, HubSpot, Slack)
        geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
      } else if (node.category === 'embedded-role') {
        // Elegant Dodecahedron for the 4 embedded roles (CSR, BDR, AM, AE)
        geometry = new THREE.DodecahedronGeometry(1.15, 1);
      } else if (node.category === 'bridge') {
        // Octahedron for Pragmatic Integration Bridge
        geometry = new THREE.OctahedronGeometry(1.2, 1);
      } else {
        // Icosahedron with floating torus for Embedded AI Operations Core
        geometry = new THREE.IcosahedronGeometry(1.25, 2);
      }

      // Metallic & Glass-finish Physical Material
      const material = new THREE.MeshPhysicalMaterial({
        color: node.color,
        metalness: node.category === 'embedded-role' ? 0.85 : 0.6,
        roughness: node.category === 'embedded-role' ? 0.18 : 0.35,
        clearcoat: node.category === 'embedded-role' ? 0.9 : 0.3,
        clearcoatRoughness: 0.1,
        reflectivity: 0.9,
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(...node.position);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      mesh.userData = { nodeData: node };

      // Wireframe aura for embedded roles and AI core
      if (node.category === 'embedded-role' || node.category === 'ai' || node.category === 'bridge') {
        const wireGeo = geometry.clone();
        const wireMat = new THREE.MeshBasicMaterial({
          color: node.color,
          wireframe: true,
          transparent: true,
          opacity: 0.28,
        });
        const wireMesh = new THREE.Mesh(wireGeo, wireMat);
        wireMesh.scale.set(1.24, 1.24, 1.24);
        mesh.add(wireMesh);
      }

      // Special Orbiting Ring around Embedded AI Operations Core
      if (node.category === 'ai') {
        const ringGeo = new THREE.TorusGeometry(1.9, 0.05, 16, 64);
        const ringMat = new THREE.MeshStandardMaterial({
          color: 0xe11d48,
          metalness: 0.9,
          roughness: 0.15,
          emissive: 0x9f1239,
          emissiveIntensity: 0.6,
        });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.rotation.x = Math.PI / 3;
        mesh.add(ring);
      }

      systemGroup.add(mesh);
      nodeMeshes.push(mesh);
    });

    // Create glowing curved visual bridges connecting Legacy Platforms -> Bridge -> Embedded 4 Roles -> AI
    const connections: [string, string][] = [
      ['legacy-salesforce', 'pragmatic-bridge'],
      ['legacy-hubspot', 'pragmatic-bridge'],
      ['legacy-slack', 'pragmatic-bridge'],
      ['pragmatic-bridge', 'role-csr'],
      ['pragmatic-bridge', 'role-bdr'],
      ['role-bdr', 'role-ae'],
      ['role-csr', 'role-am'],
      ['role-ae', 'ai-operations-core'],
      ['role-am', 'ai-operations-core'],
    ];

    const curves: THREE.CatmullRomCurve3[] = [];
    const packets: { curve: THREE.CatmullRomCurve3; mesh: THREE.Mesh; progress: number; speed: number }[] = [];

    connections.forEach(([srcId, dstId]) => {
      const src = SCENE_NODES.find((n) => n.id === srcId);
      const dst = SCENE_NODES.find((n) => n.id === dstId);
      if (!src || !dst) return;

      const p1 = new THREE.Vector3(...src.position);
      const p2 = new THREE.Vector3(...dst.position);
      const mid = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
      mid.y += 0.75; // Arching bridge curve

      const curve = new THREE.CatmullRomCurve3([p1, mid, p2]);
      curves.push(curve);

      // Tube geometry representing the integration pipeline
      const tubeGeo = new THREE.TubeGeometry(curve, 32, 0.038, 8, false);
      const tubeMat = new THREE.MeshStandardMaterial({
        color: 0x9f1239,
        emissive: 0x4a0e17,
        emissiveIntensity: 0.45,
        transparent: true,
        opacity: 0.8,
        roughness: 0.25,
        metalness: 0.85,
      });
      const tubeMesh = new THREE.Mesh(tubeGeo, tubeMat);
      systemGroup.add(tubeMesh);

      // Flowing data packets along the bridge
      for (let i = 0; i < 2; i++) {
        const packetGeo = new THREE.SphereGeometry(0.12, 12, 12);
        const packetMat = new THREE.MeshBasicMaterial({
          color: i === 0 ? 0xffffff : 0xf43f5e,
        });
        const packetMesh = new THREE.Mesh(packetGeo, packetMat);
        systemGroup.add(packetMesh);
        packets.push({
          curve,
          mesh: packetMesh,
          progress: (i * 0.5 + Math.random() * 0.3) % 1,
          speed: 0.0032 + Math.random() * 0.002,
        });
      }
    });

    // Raycasting for interactive click/inspect
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handlePointerDown = (event: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(nodeMeshes, false);

      if (intersects.length > 0) {
        const clickedMesh = intersects[0].object as THREE.Mesh;
        const data = clickedMesh.userData.nodeData as SceneNodeData;
        if (data) {
          setSelectedNode(data);
          if (data.roleKey && onSelectRole) {
            onSelectRole(data.roleKey);
          }

          // Smoothly re-center camera view toward the clicked node
          cameraTargetRef.current.lookTarget.set(data.position[0], data.position[1], data.position[2]);
          cameraTargetRef.current.camPos.set(
            data.position[0] * 0.4,
            data.position[1] + 2.2,
            data.position[2] + 5.8
          );
        }
      }
    };

    renderer.domElement.addEventListener('pointerdown', handlePointerDown);

    // Orbit Drag Controls
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;

      systemGroup.rotation.y += deltaX * 0.006;
      systemGroup.rotation.x = Math.max(-0.4, Math.min(0.5, systemGroup.rotation.x + deltaY * 0.004));
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    renderer.domElement.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // Render loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      if (isRotating && !isDragging) {
        systemGroup.rotation.y += 0.0016;
      }

      // Animate node meshes (subtle floating hover & rotation)
      nodeMeshes.forEach((mesh, index) => {
        const data = mesh.userData.nodeData as SceneNodeData;
        mesh.position.y = data.position[1] + Math.sin(time * 1.6 + index * 0.7) * 0.07;

        if (data.category === 'embedded-role') {
          mesh.rotation.y += 0.008;
        } else if (data.category === 'ai') {
          mesh.rotation.x = time * 0.35;
          mesh.rotation.y = time * 0.55;
        } else if (data.category === 'bridge') {
          mesh.rotation.z += 0.006;
          mesh.rotation.y += 0.004;
        }
      });

      // Animate flowing data packets
      packets.forEach((pkt) => {
        pkt.progress = (pkt.progress + pkt.speed * packetSpeed) % 1;
        const pt = pkt.curve.getPointAt(pkt.progress);
        pkt.mesh.position.copy(pt);
      });

      camera.position.lerp(cameraTargetRef.current.camPos, 0.04);
      camera.lookAt(cameraTargetRef.current.lookTarget);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      renderer.domElement.removeEventListener('mousedown', handleMouseDown);
      renderer.domElement.removeEventListener('pointerdown', handlePointerDown);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [packetSpeed, isRotating]);

  // View switch handler
  const handleViewChange = (view: 'panoramic' | 'roles' | 'bridges' | 'ai') => {
    setActiveView(view);
    if (view === 'panoramic') {
      cameraTargetRef.current.camPos.set(0, 4.2, 9.5);
      cameraTargetRef.current.lookTarget.set(0, 0, 0);
      setSelectedNode(SCENE_NODES[4]);
    } else if (view === 'roles') {
      // Focus on the 4 Embedded Roles
      cameraTargetRef.current.camPos.set(2.4, 2.0, 5.6);
      cameraTargetRef.current.lookTarget.set(2.6, 0.2, 0.2);
      setSelectedNode(SCENE_NODES[4]);
    } else if (view === 'bridges') {
      // Focus on Legacy Platforms & Pragmatic Bridge
      cameraTargetRef.current.camPos.set(-2.8, 1.8, 5.8);
      cameraTargetRef.current.lookTarget.set(-2.6, 0.2, 0);
      setSelectedNode(SCENE_NODES[3]);
    } else if (view === 'ai') {
      // Focus on AI Operations Core
      cameraTargetRef.current.camPos.set(4.6, 1.8, 4.2);
      cameraTargetRef.current.lookTarget.set(5.2, 0.4, 0);
      setSelectedNode(SCENE_NODES[8]);
    }
  };

  return (
    <section id="three-spatial" className="relative w-full min-h-[660px] lg:h-[740px] bg-[#121214] overflow-hidden border-b border-white/10">
      {/* 3D Canvas */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing" />

      {/* WebGL Fallback */}
      {webglError && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#121214] p-8 text-center">
          <div className="max-w-md p-6 glass-panel rounded-xl border border-white/10">
            <Info className="w-8 h-8 text-rose-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">3D Architecture Visualizer</h3>
            <p className="text-xs text-slate-400">
              Interactive 3D view is initializing. Our topology connects your existing Salesforce, HubSpot, and Slack setups to our embedded talent pods with zero disruption.
            </p>
          </div>
        </div>
      )}

      {/* Top Left Floating HUD: Tagline & Mission */}
      <div className="absolute top-6 left-6 z-10 max-w-lg pointer-events-none">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-400 mb-2">
          <span>01 · Interactive 3D Architecture</span>
        </div>
        <h2 className="text-2xl lg:text-3xl font-bold text-white font-display leading-tight mb-2">
          Embedded Talent Topology
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md font-sans">
          <span className="text-rose-400 font-medium">"Our agents embedded into your teams and workflow giving a team member feeling working towards your goal."</span> Seamless bridges overlay your existing HubSpot, Salesforce, and Slack environments.
        </p>
      </div>

      {/* Top Right Floating HUD: Scene Controls & View Switcher */}
      <div className="absolute top-6 right-6 z-10 flex flex-col items-end gap-2 pointer-events-auto">
        <div className="glass-panel p-1.5 rounded-lg flex items-center gap-1 border border-white/10">
          <button
            onClick={() => handleViewChange('panoramic')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
              activeView === 'panoramic' ? 'bg-[#9f1239] text-white font-semibold' : 'text-slate-300 hover:text-white'
            }`}
          >
            Panoramic
          </button>
          <button
            onClick={() => handleViewChange('roles')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
              activeView === 'roles' ? 'bg-[#9f1239] text-white font-semibold' : 'text-slate-300 hover:text-white'
            }`}
          >
            4 Embedded Roles
          </button>
          <button
            onClick={() => handleViewChange('bridges')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
              activeView === 'bridges' ? 'bg-[#9f1239] text-white font-semibold' : 'text-slate-300 hover:text-white'
            }`}
          >
            Pragmatic Bridges
          </button>
          <button
            onClick={() => handleViewChange('ai')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
              activeView === 'ai' ? 'bg-[#9f1239] text-white font-semibold' : 'text-slate-300 hover:text-white'
            }`}
          >
            AI Operations
          </button>
        </div>

        {/* Rotation & Stream Toggles */}
        <div className="glass-panel px-3 py-1.5 rounded-lg flex items-center gap-3 text-xs text-slate-300 border border-white/10">
          <button
            onClick={() => setIsRotating(!isRotating)}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            title="Toggle rotation"
          >
            <RotateCw className={`w-3.5 h-3.5 ${isRotating ? 'text-rose-400 animate-spin-slow' : 'text-slate-500'}`} />
            <span>{isRotating ? 'Rotating' : 'Paused'}</span>
          </button>
          <span className="text-white/20">|</span>
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] text-slate-400">Stream:</span>
            <button
              onClick={() => setPacketSpeed(packetSpeed === 1 ? 2 : packetSpeed === 2 ? 0.5 : 1)}
              className="text-rose-400 font-mono font-medium hover:underline cursor-pointer"
            >
              {packetSpeed}x
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Floating Node Inspector */}
      {selectedNode && (
        <div className="absolute bottom-6 left-6 right-6 lg:right-auto lg:max-w-md z-10 pointer-events-auto">
          <div className="glass-panel p-5 rounded-2xl border border-white/10 shadow-2xl bg-[#18181b]/95">
            <div className="flex items-start justify-between gap-4 mb-2">
              <div>
                <span className="text-[10px] font-mono tracking-wider uppercase text-rose-400 block mb-0.5">
                  Topology Node Inspector
                </span>
                <h3 className="text-base font-bold text-white font-display">{selectedNode.name}</h3>
              </div>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 font-medium whitespace-nowrap">
                {selectedNode.status}
              </span>
            </div>

            <p className="text-xs text-slate-300 mb-2.5 leading-relaxed font-sans">{selectedNode.description}</p>

            {/* Contract Deliverables Included with Every Single Contract */}
            <div className="mb-3.5 p-3 rounded-xl bg-black/60 border border-rose-500/25 space-y-2">
              <div className="flex items-center justify-between pb-1.5 border-b border-white/10">
                <span className="text-[10px] font-mono uppercase text-rose-400 font-bold tracking-wider">
                  Guaranteed Deliverables (Every Single Contract)
                </span>
                <span className="text-[10px] text-slate-400 font-mono">100% Contractual</span>
              </div>
              <div className="space-y-1.5 text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold shrink-0 text-[11px] uppercase font-mono w-20">Weekly:</span>
                  <span className="text-slate-200">
                    {selectedNode.deliverables?.weekly || 'Weekly Operations Review (KPI pacing with Engagement Director)'}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold shrink-0 text-[11px] uppercase font-mono w-20">Bi-Weekly:</span>
                  <span className="text-slate-200">
                    {selectedNode.deliverables?.biWeekly || 'Bi-Weekly Strategic Sprint (Process, pipeline calibration & tooling optimization)'}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold shrink-0 text-[11px] uppercase font-mono w-20">Quarterly:</span>
                  <span className="text-slate-200">
                    {selectedNode.deliverables?.quarterly || 'Quarterly Business Review (QBR) (Executive ROI presentation & contract health audit)'}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold shrink-0 text-[11px] uppercase font-mono w-20">Daily:</span>
                  <span className="text-slate-200">
                    {selectedNode.deliverables?.daily || 'Daily 8:00 AM AI Standup Brief & real-time ticket triage'}
                  </span>
                </div>
              </div>
            </div>

            {/* Performance Metric & < 15 min SLA Response */}
            <div className="pt-2.5 border-t border-white/10 space-y-2.5">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2 rounded-lg bg-white/[0.03] border border-white/5">
                  <span className="text-slate-400 block text-[10px] uppercase font-mono mb-0.5">Performance Metric</span>
                  <span className="font-mono text-white font-bold text-xs truncate block" title={selectedNode.metric}>
                    {selectedNode.metric}
                  </span>
                </div>
                <div className="p-2 rounded-lg bg-rose-500/10 border border-rose-500/30">
                  <span className="text-rose-300 block text-[10px] uppercase font-mono mb-0.5">Response SLA</span>
                  <span className="font-mono text-rose-400 font-bold text-xs">
                    {selectedNode.slaResponse || '< 15 min SLA Response'}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-2 pt-1">
                <span className="text-[11px] text-slate-400 font-sans truncate">
                  "Giving a team member feeling working towards your goal"
                </span>

                {selectedNode.category === 'ai' ? (
                  <button
                    onClick={onOpenAiConsole}
                    className="px-3 py-1.5 text-xs font-semibold text-white bg-[#9f1239] hover:bg-[#881337] rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 shrink-0"
                  >
                    <Bot className="w-3.5 h-3.5" />
                    <span>Launch Daily Digest</span>
                  </button>
                ) : selectedNode.roleKey ? (
                  <button
                    onClick={() => {
                      if (onSelectRole && selectedNode.roleKey) {
                        onSelectRole(selectedNode.roleKey);
                      } else {
                        const el = document.getElementById('talent-roles');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="px-3 py-1.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 hover:border-rose-400 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 shrink-0"
                  >
                    <span>View Role Specs</span>
                    <ArrowRight className="w-3.5 h-3.5 text-rose-400" />
                  </button>
                ) : (
                  <span className="text-emerald-400 text-xs font-mono shrink-0">100% Intact</span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Helper text */}
      <div className="hidden lg:block absolute bottom-6 right-6 z-10 pointer-events-none">
        <p className="text-[11px] text-slate-400 glass-panel px-3 py-1.5 rounded-lg border border-white/5">
          Click any 3D node to inspect · Drag to orbit · Deep Wine Red illumination represents premium white-glove support
        </p>
      </div>
    </section>
  );
};
