const ProgramsSearchSideWrap = () => {
  return(
    <div className ="search-side-wrap">
      <h2>Rastos 31 programos</h2>
      <div className="filter-element">
          <label htmlFor="info-select">Tema</label>
          <br />
          <select name="theme" id="info-select">
              <option value="">Visos</option>
              <option value="testavimas">testavimas</option>
              <option value="programavimas">programavimas</option>
              <option value="dizainas">dizainas</option>
              <option value="duomenys">duomenys</option>
              <option value="rinkodara">rinkodara</option>
          </select>
      </div>
      <div className="filter-element">
          <label htmlFor="info-select">Vieta</label>
          <br />
          <select name="theme" id="info-select">
              <option value="">Visos</option>
              <option value="testavimas">testavimas</option>
              <option value="programavimas">programavimas</option>
              <option value="dizainas">dizainas</option>
              <option value="duomenys">duomenys</option>
              <option value="rinkodara">rinkodara</option>
          </select>
      </div>
      <div className="filter-element">
          <label htmlFor="info-select">Tipas</label>
          <br />
          <select name="theme" id="info-select">
              <option value="">Visi</option>
              <option value="testavimas">Testavimas</option>
              <option value="programavimas">Programavimas</option>
              <option value="dizainas">Dizainas</option>
              <option value="duomenys">Duomenys</option>
              <option value="rinkodara">Rinkodara</option>
          </select>
      </div>
      <div className="filter-element">
          <label>Laikas</label>
          <br />
          <div className="filter-element-checkbox">
              <label>
                  <input type="checkbox" />
                  <span>Dienomis</span>
              </label>
          </div>
          <div className="filter-element-checkbox">
              <label>
                  <input type="checkbox" />
                  <span>Vakarais</span>
              </label>
          </div>
      </div>
      <div className="filter-element">
          <button type="reset">Išvalyti</button>
      </div>
    </div>
  );
};

export default ProgramsSearchSideWrap;