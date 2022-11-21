const HomePage = () => {
  return (
    <main>
      <section class="block-main">
        <div class="wrap">
          <div class="main-content">
            <h1>Programuok <br />savo ateitį!®</h1>
            <p>CodeAcademy programavimo kursai - <br />tiesiausias kelias technologinės karjeros link</p>
          </div>
          <div class="portal">
            <div class="portal-block">
              <h2>Studentams</h2>
              <p>Ar žengi pirmą ar kažkelintą žingsnį link tech<br />išsilavinimo - mes tau padėsim!</p>
              <p>Tiesiausias kelias link karjeros per mus. 🏁<br />CodeAcademy programavimo kursai</p>
              <a class="button" href="#">Sužinok daugiau</a>
            </div>
            <div class="portal-block">
              <h2>Verslui</h2>
              <p>Esame geriausias kompanijų draugas Edutech erdvėje.</p>
              <p>Kelsime Jūsų darbuotojų kompetenciją bei atrasime<br /> talentus. 📈CodeAcademy programavimo kursai</p>
              <a class="button" href="#">Sužinok daugiau</a>
            </div>
          </div>
        </div>
      </section>
      <section class="facts">
        <div class="wrap">
          <div class="facts-header-wrapper">
            <h2 class="facts-header">CodeAcademy pulsas</h2>
            <p>Manome, jog technologinis išsilavinimas privalo sekti šiandienos ir<br />rytojaus darbo rinkos tendencijas bei būti prieinamas kiekvienam. 🙌</p>
            <p>Šiuo principu vadovaudamiesi, kas dieną savo studentams atveriame<br />naujas galimybes. 🔝</p>
          </div>
          <div class="facts-list-wrapper">
            <ul class="facts-list">
              <li class="facts-item">
                <div class="facts-value">398</div>
                <div class="facts-description">Šiuo metu mokosi studentų</div>
              </li>
              <li class="facts-item">
                <div class="facts-value">1359</div>
                <div class="facts-description">2021m. baigė studentų</div>
              </li>
              <li class="facts-item">
                <div class="facts-value">80%</div>
                <div class="facts-description">Baigę Pažengusių studijas įsidarbino</div>
              </li>
              <li class="facts-item">
                <div class="facts-value medium-size">Front-End</div>
                <div class="facts-description">Populiariausia programa</div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;