<script setup>
</script>

<template>
  <div class="d-flex w-100">
    <!-- 側邊欄 -->
    <div class="sidebar bg-white shadow-sm" style="width: 250px; min-height: 100vh;">
      <div class="p-4">
        <h5 class="mb-0">Sunder Tarot</h5>
      </div>
      
      <div class="nav flex-column">
        <router-link 
          to="/" 
          class="nav-link d-flex align-items-center p-3"
          active-class="active">
          <i class="bi bi-grid me-2"></i>
          儀表板
        </router-link>
        <router-link 
          to="/consultations" 
          class="nav-link d-flex align-items-center p-3"
          active-class="active">
          <i class="bi bi-journal-text me-2"></i>
          諮詢紀錄
        </router-link>
      </div>
    </div>

    <!-- 主要內容區 -->
    <div class="main-content flex-grow-1 bg-light">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
.nav-link {
  color: #64748b;
}
.nav-link.active {
  color: #3b82f6;
  background-color: #f1f5f9;
}
</style>