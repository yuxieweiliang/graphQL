export default {
  state: {
    collapsed: false,
    book: {
      title: false,
      description: false,
    }
  },
  changeUsername: function(title) {
    console.log(this)
    // this.setState({ book });
  },
  changePassword: function(description) {
    let { book } = this.state;
    console.log(this)
    book.description = description
    // this.setState({ book });
  },
  createBook: function() {
    let { book } = this.state;
    kn.post({url: kn.root + 'api/book'}, book)
      .then(res => console.log(res))
  },
};
