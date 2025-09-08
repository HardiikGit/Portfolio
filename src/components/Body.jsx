export default function PageRefresh() {
     return (
          <div className="Page-Reload" style={{
               width: '40px', height: '40px', background: 'var(--fade-gray)', fontSize: '1rem',
               position: 'fixed', bottom: '30px', right: '30px',
          }}>
               <a href="#" className="PageReloadBox" style={{ color: 'var(--white-color)', transition: 'all', transitionDuration: '3s' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                         <path fillRule="evenodd" d="M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z" clipRule="evenodd" />
                    </svg>
               </a>
          </div>
     );
}