
import { html, LitElement } from 'lit-element';
import { picocssStyles } from '../granite-lit-pico-min'

class GranitePicoCSSExample extends LitElement {
  static get styles() {
    return [picocssStyles];
  }
  render() {
    return html`
      <table>
          <tr><th>Surname</th><th>Name</th></tr>
          ${this.people.map( (person) => {
            return html`
            <tr>
              <td>${person.lastname}</td>
              <td>${person.firstname}</td>
            </tr>
            `;
          })}
      </table>
    `;
  }

  static get properties() {
    return {
      people: { type: Array },
    };
  }

  constructor() {
    super();
    this.people = [
      { firstname: 'Jack', lastname: 'Aubrey' },
      { firstname: 'Anne', lastname: 'Elliot' },
      { firstname: 'Stephen', lastname: 'Maturin' },
      { firstname: 'Emma', lastname: 'Woodhouse' },
    ];
  }
}
customElements.define('granite-picocss-example', GranitePicoCSSExample);