## granite-lit-picocss

*granite-picocss* is a wrapping of [PicoCSS](https://picocss.com/) CSS as [LitElement](https://lit-element.polymer-project.org/) [lit-html CSS TemplateResult](https://lit-element.polymer-project.org/guide/styles) to be used in LitElement web components.

### Warning!

Unfortunately these cssTemplateResults use the :root pseudo-element and don't get converted to :host properly.
This obivously needs some more thought to work. PR if you know PicoCSS (and are bored).


### Using `granite-lit-picocss`

To use *granite-lit-picocss* in an element:


#### 1. Install `granite-lit-picocss`


Install the component using [npm](https://www.npmjs.com/):

```sh
$ npm i @granite-elements/granite-lit-picocss --save
```


#### 2. Import *granite-lit-picocss* in the element where you want to use it


Once installed, import it in your application. Usually you will simply want to import `granite-lit-picocss.js` (wrap around `picocss.css`) or `granite-lit-picocss-min.js` (wrap around `picocss.min.css`).

Supossing you want to import `granite-lit-picocss.js`:
 
```
import {picocss} from '@granite-elements/granite-lit-picocss/granite-lit-picocss.js';
``` 

#### 3. Inside your component, use *granite-lit-picocss* in the static `styles` property


```js

class GranitePicoCSSExample extends LitElement {
  static get styles() {
    return [picocssStyles];
  }
  render() {
    return html`
      <div class="label label-rounded label-primary">Styled text</div>
    `;
  }
```


#### A complete example

```js
import { html, LitElement } from 'lit-element';
import {picocssStyles} from '../granite-lit-picocss.js';

class GranitePicoCSSExample extends LitElement {
  static get styles() {
    return [picocssStyles];
  }
  render() {
    return html`
      <table class="table  table-hover">
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

```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

<!-- ## Install dependencies and run the demo

+   Run npm install from the repo directory:

    ```
     npm install
    ```
+   Run the [es-dev-server](https://open-wc.org/developing/es-dev-server.html) development server from the root project directory:

    ```
    npm run serve
    ``` -->


## Note on semver versioning

I'm aligning the versions of this element with PicoCSS version, in order to make easier to choose the right version
 
## License

[Apache 2.0](http://www.apache.org/licenses/LICENSE-2.0)
