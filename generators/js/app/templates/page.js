import React from 'react';
import { connect } from 'react-redux'
import Box, {VBox, Container} from 'react-layout-components'
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionDeleteForever from 'material-ui/svg-icons/action/delete-forever';
import IconButton from 'material-ui/IconButton';
import _ from 'lodash';
import {Editor} from '../components/muiform';

function Component(History, <%= entitiesLower %>) {
  const default<%= entityCapital %> = {
    name: '',
  };
  class <%= entitiesCapital %>Page extends React.Component {
    state = {
      new<%= entityCapital %>: default<%= entityCapital %>,
      <%= entityLower %>: default<%= entityCapital %>
    }

    componentDidMount() {
      this.props.get<%= entitiesCapital %>();
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.<%= entitiesLower %>.selected) {
        this.setState({<%= entityLower %>: nextProps.<%= entitiesLower %>.<%= entitiesLower %>.byId[nextProps.<%= entitiesLower %>.selected]});
      }
    }

    load = () => {
      History.push(`/`);
    }

    handleNew<%= entityCapital %>Change = (field, value) => {
      this.setState(
        {new<%= entityCapital %>: {...this.state.new<%= entityCapital %>, [field]:value}}
      );
    }

    handle<%= entityCapital %>Change = (field, value) => {
      const newValue = _.set(this.state.<%= entityLower %>, field, value);
      const key = field.split('.')[0];
      this.setState(
        {<%= entityLower %>: {...this.state.<%= entityLower %>, [key]:newValue[key]}}
      );
    }

    addNew<%= entityCapital %> = () => {
      this.props.add<%= entityCapital %>(this.state.new<%= entityCapital %>);
      this.setState({new<%= entityCapital %>: default<%= entityCapital %>});
    }

    getInsertView = () => {
      return (
        <Container className="listheader">
          <TextField
            hintText="Name"
            floatingLabelText="Name"
            onChange={(event) => {
              this.handleNew<%= entityCapital %>Change('name', event.target.value)
            }}
            style={{height: 48}}
            inputStyle={{marginTop:3}}
            floatingLabelStyle={{top: 18}}
            value={this.state.new<%= entityCapital %>.name}
          />
          <Box alignItems="flex-end">
            <FlatButton label="Add" primary={true} onClick={this.addNew<%= entityCapital %>} />
          </Box>
        </Container>
      )
    }

    delete<%= entityCapital %> = (e, id) => {
      e.stopPropagation();
      e.preventDefault();
      this.remove<%= entityCapital %>(id);
    }

    remove<%= entityCapital %> = (id) => {
      this.setState({<%= entityLower %>: default<%= entityCapital %>});
      this.props.delete<%= entityCapital %>(id);
    }

    update<%= entityCapital %> = () => {
      this.props.update<%= entityCapital %>(this.state.<%= entityLower %>);
    }

    <%= entityLower %>List = () => {
      const <%= entitiesLower %>List = Object.values(this.props.<%= entitiesLower %>.<%= entitiesLower %>.byId);
        return <%= entitiesLower %>List.map((item, index)=>{
        return (
          <ListItem
            primaryText={item.name}
            key={index}
            leftIcon={<ContentInbox />}
            rightIconButton={
              <IconButton>
                <ActionDeleteForever onClick={
                  (e) => this.delete<%= entityCapital %>(e, item._id)
                } />
              </IconButton>
            }
            onClick={()=> this.props.select<%= entityCapital %>(item._id)}
          />
        );
      });
    }

    render() {
      const <%= entityLower %>Id = this.props.<%= entitiesLower %>.selected;
      return (
        <div>
          <Box className="subheader"><%= entitiesCapital %></Box>
          {this.getInsertView()}
          <Box>
            <VBox flex={1} className="box hbox">
              {this.getInsertView()}
              <Divider />
              <Box flex={1} className="sbox">
                <List style={{margin: 10, width: "100%"}}> {this.<%= entityLower %>List()} </List>
              </Box>
            </VBox>
            <VBox flex={1} className="box hbox">
              <Container className="listheader">
                {!<%= entityLower %>Id &&
                  <span className="info-text">
                    please select a <%= entityLower %> to edit it
                  </span>
                }
                {<%= entityLower %>Id &&
                  <span className="header-text">
                    {this.state.<%= entityLower %>.name}
                  </span>
                }
              </Container>
              <Divider />

              {!<%= entityLower %>Id &&
                <span style={{margin:20}}> please select a <%= entityLower %> to edit it </span>
              }

              {<%= entityLower %>Id &&
                <Box flex={1} className="sbox">
                  <Editor
                    handleChange={this.handle<%= entityCapital %>Change}
                    item={this.state.<%= entityLower %>}
                    deleteItem={()=>this.remove<%= entityCapital %>(<%= entityLower %>Id)}
                    saveForm={()=>this.update<%= entityCapital %>()}
                    fields={[
                      {name: 'name', type: 'string', key: <%= entityLower %>Id},
                    ]}
                  />
                </Box>
              }
            </VBox>
          </Box>
        </div>
      );
    }
  }

  const data = ({<%= entitiesLower %>}) => ({<%= entitiesLower %>});

  const operations = (dispatch) => ({
    get<%= entitiesCapital %>: () => {
      dispatch(<%= entitiesLower %>.get<%= entitiesCapital %>());
    },
    delete<%= entityCapital %>: (id) => {
      dispatch(<%= entitiesLower %>.delete<%= entityCapital %>(id));
    },
    select<%= entityCapital %>: (id) => {
      dispatch(<%= entitiesLower %>.select<%= entityCapital %>(id));
    },
    add<%= entityCapital %>: (data) => {
      dispatch(<%= entitiesLower %>.add<%= entityCapital %>(data));
    },
    update<%= entityCapital %>: (data) => {
      dispatch(<%= entitiesLower %>.update<%= entityCapital %>(data));
    }

  });

  return connect(data, operations)(<%= entitiesCapital %>Page);
}

Component.deps = ['History', '<%= entityLower %>State'];
module.exports = Component;
