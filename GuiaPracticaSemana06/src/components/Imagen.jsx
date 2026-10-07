import { useState } from 'react';

function Imagen({ src, alt, className = '', fallback = '🏔️' }) {
  const [fallo, setFallo] = useState(false);

  if (fallo) {
    return (
      <div className={`imagen-fallo ${className}`} role="img" aria-label={alt}>
        {fallback}
      </div>
    );
  }

  return (
    <img src={src} alt={alt} className={className} loading="lazy" onError={() => setFallo(true)} />
  );
}

export default Imagen;
