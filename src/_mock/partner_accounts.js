const Partner_Accounts = {
  payout_completed: 0,
  payout_pending: 0,
  payout_in_review: 0,
  payouts: [
    { amount: 500000, level: "level 1", frequency: "Weekly payout" },
    { amount: 300000, level: "level 2", frequency: "Weekly payout" },
    { amount: 400000, level: "level 2", frequency: "Daily payout" },
  ],
  top: [
    { name: "XYX", earnings: 30000, level: "level 1" },
    { name: "XYX", earnings: 30000, level: "level 2" },
    { name: "XYX", earnings: 30000, level: "level 1" },
    { name: "XYX", earnings: 30000, level: "level 1" },
    { name: "XYX", earnings: 30000, level: "level 3" },
  ],
  bottom: [
    { name: "XYX", earnings: 30000, level: "level 1" },
    { name: "XYX", earnings: 30000, level: "level 1" },
    { name: "XYX", earnings: 30000, level: "level 2" },
    { name: "XYX", earnings: 30000, level: "level 1" },
    { name: "XYX", earnings: 30000, level: "level 8" },
  ]
};

export default Partner_Accounts;