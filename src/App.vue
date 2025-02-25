<script setup>
</script>

<template>
  <div class="d-flex w-100 index-pg">
    <!-- 側邊欄 -->
    <div class="sidebar shadow-sm rounded-4">
      <div class="text-center
      pt-4 pb-2 text-white">
        <img src="@/assets/img/Sunder-Tarot-logo.png" alt="">
        <h5 class="mb-0 pt-4 pb-1 ">Sunder Tarot
        </h5>
        <span>靈感指引所</span>
      </div>
   
      <div class="nav flex-column mt-5">
        <!-- <router-link 
          to="/" 
          class="nav-link d-flex align-items-center p-3"
          active-class="active">
          <i class="bi bi-grid me-2 "></i>
          儀表板
        </router-link> -->
        <router-link 
          to="/consultations" 
          class="nav-link d-flex align-items-center p-3"
          active-class="active">
          <i class="bi bi-journal-text me-2"></i>
          諮詢紀錄
        </router-link>
        <router-link 
          to="/SchedulingSystem" 
          class="nav-link d-flex align-items-center p-3"
          active-class="active">
          <i class="bi bi-calendar-week me-2"></i>
          預約排程
        </router-link>

      </div>
    </div>

    <!-- 主要內容區 -->
    <div class="main-content flex-grow-1  p-4">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>

</style>