import { useEffect, useRef } from 'react'

const CanvasSignature = () => {
const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Dessiner la signature
    ctx.font = '14px Skyline';
    ctx.fillStyle = '#6b7280';
    ctx.fillText('Xeon', 10, 25);
    
    // Ajouter un peu de bruit pour rendre la modification plus difficile
    for (let i = 0; i < 50; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const alpha = Math.random() * 0.05;
      ctx.fillStyle = `rgba(0,0,0,${alpha})`;
      ctx.fillRect(x, y, 1, 1);
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={50}
      height={40}
      className="absolute bottom-5 right-0 pointer-events-none skyline"
      style={{
        userSelect: 'none',
        WebkitUserSelect: 'none',
      }}
    />
  );
}

export default CanvasSignature