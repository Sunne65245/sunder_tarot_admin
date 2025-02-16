<template>
  <div class="container py-4">
    <div class="d-flex justify-content-between mb-4">
      <h2>諮詢紀錄</h2>
      <button class="btn btn-primary"data-bs-toggle="modal" data-bs-target="#addRecordModal">
        <i class="bi bi-plus"></i>
        新增紀錄
      </button>
    </div>

    <!-- 搜尋區塊 -->
    <div class="card mb-4">
      <div class="card-body">
        <div class="row g-3">
          <div class="col-md-4">
            <label class="form-label">客戶名稱</label>
            <input type="text" class="form-control" placeholder="搜尋客戶...">
          </div>
          <div class="col-md-4">
            <label class="form-label">日期範圍</label>
            <input type="date" class="form-control">
          </div>
        </div>
      </div>
    </div>

    <!-- 紀錄列表 -->
    <div class="card">
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th>日期</th>
              <th>客戶名稱</th>
              <th>諮詢主題</th>
              <th>牌陣</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2024/02/13</td>
              <td>王小明</td>
              <td>事業發展</td>
              <td>三張牌陣</td>
              <td>
                <button class="btn btn-sm btn-outline-primary me-2">
                  <i class="bi bi-pencil"></i>
                </button>
                <button class="btn btn-sm btn-outline-danger">
                  <i class="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- Modal 彈窗 -->
     <div class="modal fade" id="addRecordModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- Modal 標題 -->
          <div class="modal-header">
            <h5 class="modal-title">新增諮詢紀錄</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          
          <!-- Modal 內容 -->
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label">客戶名稱</label>
              <input type="text" class="form-control">
            </div>
            <div class="mb-3">
              <label class="form-label">日期範圍</label>
              <input type="date" class="form-control">
            </div>
            <div class="mb-3">
              <label class="form-label">諮詢主題</label>
              <input type="text" class="form-control">
            </div>
            <div class="mb-3">
              <label class="form-label">牌陣</label>
              <input type="text" class="form-control">
            </div>
          </div>

          <!-- Modal 底部按鈕 -->
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary">儲存</button>
          </div>
        </div>
      </div>
      </div>
  </div>
</template>

<script setup>
</script>