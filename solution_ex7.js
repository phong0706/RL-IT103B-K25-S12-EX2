const prompt = require('prompt-sync')();

const subscriptions = [
  { subscriptionId: 'SUB_001', customerName: 'Nguyen Van An', planTier: 'PERSONAL', deviceLimit: 1 },
  { subscriptionId: 'SUB_002', customerName: 'Tran Thi Mai', planTier: 'FAMILY', deviceLimit: 5 },
  { subscriptionId: 'SUB_003', customerName: 'Le Hoang Nam', planTier: 'PERSONAL', deviceLimit: 1 }
];

const listSubscriptions = () => {
  console.log('--------------------------------------------------');
  console.log('DANH SACH THUE BAO');
  console.log('--------------------------------------------------');
  console.table(subscriptions);
};

const addSubscription = () => {
  const customerName = prompt('Nhap ten khach hang: ');
  const planTierInput = prompt('Nhap goi cuoc (1: PERSONAL, 2: FAMILY): ');
  
  let planTier = 'PERSONAL';
  let deviceLimit = 1;
  
  if (planTierInput === '2') {
    planTier = 'FAMILY';
    deviceLimit = 5;
  }
  
  const newId = `SUB_${String(subscriptions.length + 1).padStart(3, '0')}`;
  
  subscriptions.push({
    subscriptionId: newId,
    customerName: customerName,
    planTier: planTier,
    deviceLimit: deviceLimit
  });
  
  console.log('Them thue bao thanh cong!');
};

const updateSubscription = () => {
  const id = prompt('Nhap ma thue bao can cap nhat (VD: SUB_001): ');
  const target = subscriptions.find(item => item.subscriptionId === id);
  
  if (!target) {
    console.log('Khong tim thay ma thue bao!');
    return;
  }
  
  const planTierInput = prompt('Chon goi cuoc moi (1: PERSONAL, 2: FAMILY): ');
  
  if (planTierInput === '1') {
    target.planTier = 'PERSONAL';
    target.deviceLimit = 1;
    console.log('Cap nhat thanh cong!');
  } else if (planTierInput === '2') {
    target.planTier = 'FAMILY';
    target.deviceLimit = 5;
    console.log('Cap nhat thanh cong!');
  } else {
    console.log('Lua chon khong hop le!');
  }
};

const deleteSubscription = () => {
  const id = prompt('Nhap ma thue bao can huy (VD: SUB_001): ');
  const index = subscriptions.findIndex(item => item.subscriptionId === id);
  
  if (index === -1) {
    console.log('Khong tim thay ma thue bao!');
    return;
  }
  
  subscriptions.splice(index, 1);
  console.log('Huy thue bao thanh cong!');
};

let choice;

do {
  console.log('\n=== QUAN LY THUE BAO CLOUD ===');
  console.log('1. Them thue bao moi');
  console.log('2. Xem toan bo danh sach');
  console.log('3. Cap nhat goi cuoc');
  console.log('4. Huy thue bao');
  console.log('5. Thoat chuong trinh');
  
  choice = prompt('Chon chuc nang (1-5): ');
  
  switch (choice) {
    case '1':
      addSubscription();
      break;
    case '2':
      listSubscriptions();
      break;
    case '3':
      updateSubscription();
      break;
    case '4':
      deleteSubscription();
      break;
    case '5':
      console.log('Tam biet!');
      break;
    default:
      console.log('Lua chon khong hop le, vui long chon lai!');
  }
} while (choice !== '5');