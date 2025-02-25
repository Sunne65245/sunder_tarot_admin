<template>
  <div class="container py-4">
    <div class="d-flex justify-content-between mb-4">
      <h2>諮詢紀錄</h2>
      <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addRecordModal">
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
            <input type="text" class="form-control" placeholder="搜尋客戶..." v-model="searchQuery">
          </div>
          <div class="col-md-4">
            <label class="form-label">日期範圍</label>
            <div class="d-flex gap-2 align-items-center">
              <input type="date" class="form-control" v-model="startDate">
              <span>至</span>
              <input type="date" class="form-control" v-model="endDate">
            </div>
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
            <tr v-for="record in filteredRecords" :key="record.id">
              <td>{{ record.date }}</td>
              <td>{{ record.client_name }}</td>
              <td>{{ record.topic }}</td>
              <td>{{ record.spread }}</td>
              <td>
                <button class="btn btn-sm btn-outline-primary me-2" @click="editRecord(record)">
                  <i class="bi bi-pencil"></i> 編輯
                </button>
                <button class="btn btn-sm btn-outline-danger" @click="deleteRecord(record.id)">
                  <i class="bi bi-trash"></i> 刪除
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- Modal 新增諮詢彈窗 -->
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
              <input type="text" class="form-control" v-model="newRecord.client_name">
            </div>
            <div class="mb-3">
              <label class="form-label">占卜日期</label>
              <input type="date" class="form-control" v-model="newRecord.date">
            </div>
            <div class="mb-3">
              <label class="form-label">諮詢主題</label>
              <input type="text" class="form-control" v-model="newRecord.topic">
            </div>
            <div class="mb-3">
              <label for="spreadSelect" class="form-label">牌陣</label>
              <select id="spreadSelect" class="form-select" v-model="newRecord.spread">
                <option value="" disabled>請選擇牌陣</option>
                <option v-for="spread in spreadOptions" :key="spread" :value="spread">
                  {{ spread }}
                </option>
              </select>
            </div>


          </div>

          <!-- Modal 底部按鈕 -->
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="addRecord" data-bs-dismiss="modal">
              儲存
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal 編輯紀錄的 -->
    <div class="modal fade" ref="editRecordModal">
      <div class="modal-dialog">
        <div class="modal-content" v-if="editingRecord">
          <div class="modal-header">
            <h5 class="modal-title">編輯諮詢紀錄</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label">客戶名稱</label>
              <input type="text" class="form-control" v-model="editingRecord.client_name">
            </div>
            <div class="mb-3">
              <label class="form-label">日期</label>
              <input type="date" class="form-control" v-model="formattedDate">
            </div>
            <div class="mb-3">
              <label class="form-label">諮詢主題</label>
              <input type="text" class="form-control" v-model="editingRecord.topic">
            </div>

            <div class="mb-3">
              <label for="spreadSelect" class="form-label">牌陣</label>
              <select id="spreadSelect" class="form-select" v-model="editingRecord.spread">
                <option value="" disabled>請選擇牌陣</option>
                <option v-for="spread in spreadOptions" :key="spread" :value="spread">
                  {{ spread }}
                </option>
              </select>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="updateRecord" data-bs-dismiss="modal">儲存</button>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>




<script setup>
import { ref, computed , nextTick , onMounted } from 'vue';
import { Modal } from 'bootstrap';
import axios from "axios";


const api = axios.create({
  baseURL: "https://67bb53c2fbe0387ca139c639.mockapi.io/sunder-tarot/v1"
});
const records = ref([]);

onMounted(async () => {
  try {
    const response = await api.get("/records");  
    records.value = response.data;
  } catch (error) {
    console.error("獲取資料失敗:", error);
  }
});

// 新增紀錄的表單資料
const newRecord = ref({
  client_name: '',
  date: '',
  topic: '',
  spread: ''
});

// 新增紀錄函式
const addRecord = async () => {
  const isEmpty = Object.values(newRecord.value).some(value => !value);
  if (isEmpty) {
    alert("請填寫完整資訊");
    return;
  }

  try {
    const response = await api.post("/records", newRecord.value);
    records.value.push(response.data); // **同步前端狀態**
    
    // 清空表單
    newRecord.value = { client_name: "", date: "", topic: "", spread: "" };
  } catch (error) {
    console.error("新增失敗:", error);
  }
};


// 目前正在編輯的紀錄
const editingRecord = ref(null);
const editRecordModal = ref(null)
const formattedDate = computed({
  get: () => {
    if (!editingRecord.value || !editingRecord.value.date) return '';
    return editingRecord.value.date.replace(/\//g, '-'); // 轉換 2024/02/13 → 2024-02-13
  },
  set: (newValue) => {
    editingRecord.value.date = newValue.replace(/-/g, '/'); // 轉換回 2024-02-13 → 2024/02/13
  }
});

// 編輯函式
const editRecord = (record) => {
  if (!record) return;
  editingRecord.value = { ...record };

  nextTick(() => {
    if (editRecordModal.value) {
      const modal = new Modal(editRecordModal.value);
      modal.show();
    } else {
      console.error("找不到 editRecordModal");
    }
  });
};

// 更新紀錄
const updateRecord = async () => {
  if (!editingRecord.value || !editingRecord.value.id) return;

  try {
    const response = await api.put(`/records/${editingRecord.value.id}`, editingRecord.value);
    
    // 更新前端的 records 陣列
    const index = records.value.findIndex(r => r.id === editingRecord.value.id);
    if (index !== -1) records.value[index] = response.data;
  } catch (error) {
    console.error("更新失敗:", error);
  }
};


// 刪除紀錄函式
const deleteRecord = async (id) => {
  try {
    await api.delete(`/records/${id}`);
    
    // 前端同步刪除該筆資料
    records.value = records.value.filter(record => record.id !== id);
  } catch (error) {
    console.error("刪除失敗:", error);
  }
};


// 儲存搜尋的關鍵字
const searchQuery = ref("");
// 日期範圍的兩個
const startDate = ref('');
const endDate = ref('');

const filteredRecords = computed(() => {
  return records.value.filter(record => {
    // 先處理搜尋條件
    const matchesSearch = !searchQuery.value || 
      record.client_name.toLowerCase().includes(searchQuery.value.toLowerCase());

    // 再處理日期篩選
    const recordDate = new Date(record.date.replace(/\//g, "-")); // 轉換成 Date 物件
    const isAfterStart = !startDate.value || recordDate >= new Date(startDate.value);
    const isBeforeEnd = !endDate.value || recordDate <= new Date(endDate.value);

    // 同時滿足這兩個條件的資料才會顯示
    return matchesSearch && isAfterStart && isBeforeEnd;
  });
});



// 牌陣選項
const spreadOptions = ref([
  '單張',
  '三張牌（時間之流）',
  '二選一',
  '凱爾特十字'
]);

</script>
