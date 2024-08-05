<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
              <h2 class="text-center my-4"></h2>
              <div class="my-3">
                <input type="search" class="form-control rounded-5" placeholder="Mau Baca Apa Hari Ini?">
              </div>
              <div class="my-3 text-inter">Menampilkan Buku</div>
              <div class="row">
                <div class="col-lg-2">
                  <div class="card mb-3">
                    <div class="card-body">
                      <img src="~/assets/img/cover1.webp" class="cover" alt="cover1">
                    </div>
                  </div>
                </div>
                <div class="col lg-2">
                  <div class="card mb-3">
                    <div class="card-body">
                      <img src="~/assets/img/cover2.webp" class="cover" alt="cover2">
                    </div>
                  </div>
                </div>
                <div class="col lg-2">
                  <div class="card mb-3">
                    <div class="card-body">
                      <img src="~/assets/img/cover3.webp" class="cover" alt="cover3">
                    </div>
                  </div>
                </div>
                <div class="col lg-2">
                  <div class="card mb-3">
                    <div class="card-body">
                      <img src="~/assets/img/cover4.webp" class="cover" alt="cover4">
                    </div>
                  </div>
                </div>
                <div class="col lg-2">
                  <div class="card mb-3">
                    <div class="card-body">
                      <img src="~/assets/img/cover5.webp" class="cover" alt="cover5">
                    </div>
                  </div>
                </div>
                <div class="col lg-2">
                  <div class="card mb-3">
                    <div class="card-body">
                      <img src="~/assets/img/cover6.webp" class="cover" alt="cover6">
                    </div>
                  </div>
                </div>
              </div>
              <NuxtLink to="/">
          <button type="button" class="btn btn-navbar-header">kembali</button>
        </NuxtLink>
            </div>
          </div>
        </div>
</template>

<style scoped>
.card-body {
  width: 100%;
  height: 30em;
  padding: 0;
}
.cover {
    width: 100%;
    height: 80%;
    object-fit: cover;
    object-position: 0 20;
}
</style>