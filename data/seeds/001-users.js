
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'user1',
          password: '$2a$08$FPVhoWVMfotOPgiOh0T8s.1VPPBn3wj3.uKfnwh7wgeSA09ZJm15O',
          department: 'hr'
        },
        {
          username: 'user2',
          password: '$2a$08$FPVhoWVMfotOPgiOh0T8s.1VPPBn3wj3.uKfnwh7wgeSA09ZJm15O',
          department: 'hr'
        },
        {
          username: 'user3',
          password: '$2a$08$FPVhoWVMfotOPgiOh0T8s.1VPPBn3wj3.uKfnwh7wgeSA09ZJm15O',
          department: 'sales'
        },
        {
          username: 'user4',
          password: '$2a$08$FPVhoWVMfotOPgiOh0T8s.1VPPBn3wj3.uKfnwh7wgeSA09ZJm15O',
          department: 'sales'
        },
        {
          username: 'user5',
          password: '$2a$08$FPVhoWVMfotOPgiOh0T8s.1VPPBn3wj3.uKfnwh7wgeSA09ZJm15O',
          department: 'accounting'
        },
        {
          username: 'user6',
          password: '$2a$08$FPVhoWVMfotOPgiOh0T8s.1VPPBn3wj3.uKfnwh7wgeSA09ZJm15O',
          department: 'accounting'
        }
      ]);
    });
};
