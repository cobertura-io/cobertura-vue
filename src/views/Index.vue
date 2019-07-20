 <template>
  <section class="search">
    <div class="navbar-fixed">
      <nav class="bg-primary">
        <div class="nav-wrapper">
          <img class="brand-logo" src="../assets/images/logo.png" alt="Logo Cobertura" />
          <ul class="right">
            <li>
              <a href="#">Lorem</a>
            </li>
            <li>
              <a href="#">Ipsum</a>
            </li>
            <li>
              <a href="#">Dolor</a>
            </li>
            <li>
              <router-link to="/login" class="btn btn-white">Entrar</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <div class="big-container">
      <div class="cta">
        <h1 class="display">
          Encontre sua nova casa e agende
          <br />uma visita sem compromisso.
        </h1>
        <form class="search-group">
          <input
            type="text"
            name="search-item"
            id="search-item"
            class="input-search"
            placeholder="Onde você quer morar?"
            autocomplete="off"
          />
          <button class="btn btn-search fa"></button>
        </form>
        <div class="text-center mt-3">
          <a href="#" class="text-white">Quer anunciar um imóvel?</a>
        </div>
      </div>
      <div class="decoration">
        <img src="../assets/images/sofa.png" alt="ilustração de um sofá" width="500" class="sofa" />
        <img src="../assets/images/bolhas.png" class="bubble" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "../assets/css/libs.css";
@import "../assets/css/style.css";
</style>