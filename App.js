class App extends React.Component {
  state = {
    items: [
      { id: 1, name: 'Tea', active: false },
      { id: 2, name: 'Potatoes', active: false },
      { id: 3, name: 'Cereal', active: false },
      { id: 4, name: 'Broth', active: false },
      { id: 5, name: 'Hot water', active: false },
      { id: 6, name: 'Bread', active: false },
    ],
  };

  handleChangeStatus = (id) => {
    const items = this.state.items.map((item) => {
      if (id === item.id) {
        item.active = !item.active;
      }
      return item;
    });

    this.setState({
      items,
    });
  };

  render() {
    return (
      <React.Fragment>
        <Header items={this.state.items} />
        <ListItems
          items={this.state.items}
          changeStatus={this.handleChangeStatus}
        />
      </React.Fragment>
    );
  }
}
