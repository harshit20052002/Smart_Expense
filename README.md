# SmartExpense
Personal expense tracker (Node.js + Express + MongoDB)

## Run locally
1. `npm install`
2. Copy `.env.example` to `.env` and set `MONGO_URI`
3. `node utils/seed.js` to seed sample data (optional)
4. `node server.js`

API endpoints:
- `GET /expenses` - list
- `POST /expenses` - create
- `PUT /expenses/:id` - update
- `DELETE /expenses/:id` - delete

Made for portfolio/demo purposes.
