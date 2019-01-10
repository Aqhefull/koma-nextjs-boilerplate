import React, { Component } from 'react'
import { Link } from '../routes'
import { connect } from "react-redux";
import { fetchCharacter, fetchCharacters } from "./../actions";
import Counter from "../components/counter";
import Layout from '../components/UI/Layout';
import { getCharacterById } from '../selectors'
class CharacterPage extends Component {
  static getInitialProps({ query: { id } }) {
    return { id }
  }
  componentDidMount() {
    this.props.fetchCharacter(this.props.id);
    this.props.fetchCharacters()
  }
  render() {
    const { character } = this.props
    return (
        (character) ? <Layout>
          <div className="character">
            <div className="character__container">
              <div style={{ padding: "20px 0" }}>
                <Link route="index">
                  <a>Back to home</a>
                </Link>
                <h1>Charactername: {(character.name) ? character.name : null}</h1>
              </div>
              <Counter />
            </div>
          </div>
        </Layout> : null
    )
  }
}
const mapStateToProps = (state) => ({
  character: getCharacterById(state.characters, state.characterPage.id)
})
const mapDispatchToProps = {
  fetchCharacter,
  fetchCharacters
};
export default connect(mapStateToProps, mapDispatchToProps)(CharacterPage);