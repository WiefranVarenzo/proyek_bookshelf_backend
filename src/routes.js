const {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteNoteByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookByIdHandler,
  },
  {
    method: 'Delete',
    path: '/books/{id}',
    handler: deleteNoteByIdHandler,
  },
  {
    method: '*',
    path: '/{any*}',
    handler: () => {
      const response = {
        status: 'fail',
        message: 'Halaman tidak ditemukan',
      };
      return response;
    },
  },
];

module.exports = routes;
