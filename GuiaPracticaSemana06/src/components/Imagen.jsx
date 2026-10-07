import { useState } from 'react';
import { Mountain } from 'lucide-react';

function Imagen({ src, alt, className = '', fallback = null }) {
  const [fallo, setFallo] = useState(false);

  if (fallo) {
    return (
      <div className={`imagen-fallo ${className}`} role="img" aria-label={alt}>
        {fallback ?? <Mountain size={36} strokeWidth={1.6} />}
      </div>
    );
  }

  return (
    <img src={src} alt={alt} className={className} loading="lazy" onError={() => setFallo(true)} />
  );
}

export default Imagen;
