import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import video from '@/assets/siteclub-explicativo.mp4.asset.json';
import poster from '@/assets/siteclub-video-poster.jpg.asset.json';
import logoUrl from '@/assets/siteclub-logo.webp';

const LOW_VOLUME = 0.15;

export function ServiceVideo() {
 const ref = useRef<HTMLVideoElement>(null);
 const [muted, setMuted] = useState(false);

 useEffect(() => {
  const el = ref.current;
  if (!el) return;
  el.volume = LOW_VOLUME;
  el.muted = false;
  // Browsers may block autoplay with sound; fall back to muted autoplay.
  el.play().catch(() => { el.muted = true; setMuted(true); el.play().catch(() => {}); });
 }, []);

 function toggleSound() {
  const el = ref.current;
  if (!el) return;
  el.volume = LOW_VOLUME;
  el.muted = !el.muted;
  setMuted(el.muted);
  if (el.paused) el.play().catch(() => {});
 }

 return <section className="service-video-section" aria-labelledby="service-video-title">
  <div className="site-width">
   <div className="section-heading"><div><span className="eyebrow">CONHEÇA O SITECLUB</span><h2 id="service-video-title">Seu próximo site começa aqui.</h2></div><img src={logoUrl} alt="Siteclub — sites e sistemas por assinatura" className="video-logo" width={768} height={512}/></div>
   <div className="service-video-wrap">
    <video ref={ref} className="service-video" controls playsInline autoPlay loop preload="metadata" poster={poster.url} aria-label="Vídeo explicativo dos serviços Siteclub">
     <source src={video.url} type="video/mp4"/>
     Seu navegador não suporta este vídeo. <a href={video.url}>Abrir vídeo explicativo</a>
    </video>
    {muted && <Button className="button-3d video-sound" onClick={toggleSound}><VolumeX/>Ativar som</Button>}
    {!muted && <Button variant="outline" size="icon" className="video-sound-icon" aria-label="Silenciar vídeo" onClick={toggleSound}><Volume2/></Button>}
   </div>
  </div>
 </section>;
}
