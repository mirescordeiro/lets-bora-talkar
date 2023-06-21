import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('team-scoreboard')
export class teamScoreboard extends LitElement {

  @property({ type: Number })
  count = 0
  @property({ type: String})
  id = 'team'
  @property({ type: String})
  team = 'Team'

  render() {
    return html`
      <div class="card">
        <button @click=${this._onClick} part="button">
          ${this.count}
        </button>
        <label for=${this.id}>${this.team}</label>
        <textarea id=${this.id} name=${this.id} rows="8" cols="10"></textarea>
      </div>
    `
  }

  private _onClick() {
    this.count++
  }

  static styles = css`
    :host {
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }

    .card {
      display: flex;
      flex-direction: column;
      gap: 1em;
      width: 8em;
    }

    button {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 2em;
      font-weight: 500;
      font-family: inherit;
      background-color: #1a1a1a;
      cursor: pointer;
      transition: border-color 0.25s;
    }
    button:hover {
      border-color: #213547;
    }
    button:focus,
    button:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }

    textarea {
      padding: 20px 0;
      font-weight: 400;
      font-family: inherit;
      font-size: 0.95em;
      line-height: 1.5;
      text-align: center;
      box-sizing: border-box;
      border: 1px solid #213547;
      border-radius: 8px;
      background-color: #f9f9f9;
    }

    @media (prefers-color-scheme: light) {
      a:hover {
        color: #747bff;
      }
      button {
        background-color: #f9f9f9;
      }
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'team-scoreboard': teamScoreboard
  }
}
