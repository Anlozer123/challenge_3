# 🚩 Challenge 3: Dice Game 🎲

Đây là bài giải cho **Challenge 3: Dice Game** thuộc chuỗi bài tập [Speedrun Ethereum](https://speedrunethereum.com/). Mục tiêu của thử thách này là "hack" một trò chơi xúc xắc bằng cách dự đoán số ngẫu nhiên (random number) trên Blockchain để luôn chiến thắng.

Dự án được xây dựng dựa trên **Scaffold-ETH 2**.

## ⚙️ Yêu cầu cài đặt

Trước khi bắt đầu, hãy đảm bảo máy của bạn đã cài đặt:
- [Node.js](https://nodejs.org/) (Phiên bản >= v20.18.3)
- [Yarn](https://yarnpkg.com/) (v1 hoặc v2+)
- [Git](https://git-scm.com/)
## 🛠 Cài đặt và Chạy dự án

Yêu cầu: [Node.js](https://nodejs.org/) (>= v20.18.3) và [Yarn](https://yarnpkg.com/).

## Bước 1: Cài đặt dự án

1. Clone dự án về máy tính của bạn:
   ```bash
   git clone [https://github.com/USERNAME_CUA_BAN/challenge-1-decentralized-staking.git](https://github.com/USERNAME_CUA_BAN/challenge-1-decentralized-staking.git)
   cd challenge-1-decentralized-staking
Cài đặt các thư viện cần thiết:
  ```bash
  yarn install
```
### Bước 2: Chạy trên mạng Local (Máy cá nhân)
Sử dụng môi trường này để phát triển và kiểm thử nhanh mà không tốn phí gas thật. Bạn cần mở 3 cửa sổ Terminal riêng biệt:

Terminal 1: Khởi chạy mạng blockchain ảo
```bash
yarn chain
```
Terminal 2: Deploy Smart Contract lên mạng ảo
```bash
yarn deploy
```
Terminal 3: Chạy giao diện Web (Frontend)
```bash
yarn start
```
Sau đó truy cập trình duyệt tại: http://localhost:3000
