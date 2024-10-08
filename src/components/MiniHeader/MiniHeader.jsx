export default function MiniHeader() {
    return (
      <header className="header-section">
        <div className="header-content formpage-container">
          <img src="/Assets/Iteration-1-assets/logo.svg" alt="logo" />
          <nav>
            <a href="#">Anasayfa</a>
            <span> - </span>
            <a href="#">Sipariş Oluştur</a>
          </nav>
        </div>
      </header>
    );
  }