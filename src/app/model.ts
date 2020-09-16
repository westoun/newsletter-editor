import * as uuidv4 from 'uuid/v4';

export interface NewsletterElement {
  id: string;
  className: string;
  createHtml();
}

export class TextElement implements NewsletterElement {
  id: string;
  className = 'TextElement';
  header = 'header x';
  text = 'this is just some default text';

  constructor() {
    this.id = uuidv4();
  }

  createHtml() {
    return `
    <!-- SINGLE TEXT SECTION -->
    <tr>
    <td style="padding: 0;">
      <table width="100%" style="border-spacing: 0;font-family: sans-serif;color: #727f80;">
        <tr>
          <td style="padding: 10px;font-size: 16px;line-height: 20px;text-align: justify;">
            <h3 style="color: rgb(9,39,89);
                       text-align: center; margin: 12px;">` + this.header + `</h3>
            <p style="margin: 20px auto;display: table;text-align: justify;
            max-width: 580px;line-height: 24px; color: black;">` + this.text + `</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <!-- END SINGLE TEXT SECTION -->`;
  }
}

export class PictureElement implements NewsletterElement {
  id: string;
  className = 'PictureElement';
  url = 'https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&h=350';

  constructor() {
    this.id = uuidv4();
  }

  createHtml() {
    return `
    <!-- SINGLE PICTURE SECTION -->
    <tr>
    <td style="padding: 0;">
      <table width="100%">
        <tr>
          <td style="padding: 0;">
            <img src="` + this.url + `" width="100%">
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <!-- End SINGLE PICTURE SECTION -->		`;
  }
}

export class PictureTextElement implements NewsletterElement {
  id: string;
  className = 'PictureTextElement';
  header = 'header x';
  text = 'this is just some default text which should be long enough';
  url = 'https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&h=350';

  constructor() {
    this.id = uuidv4();
  }

  createHtml() {
    return `
    <!-- PICTURE-TEXT SECTION -->
    <tr>
    <td style="padding: 5px 0 10px 0;text-align: center;font-size: 0;">
      <div style="width: 100%;max-width: 300px;display: inline-block;vertical-align: top;">
        <table width="100%" style="border-spacing: 0;font-family: sans-serif;color: #727f80;">
          <tr>
            <td style="padding: 10px;">
              <table style="border-spacing: 0;font-family: sans-serif;color: #727f80;
              width: 100%;padding-top: 20px;font-size: 16px;line-height: 20px;text-align: justify;">
                <tr>
                  <td style="padding: 0;">
                    <img src="` + this.url + `" style="border: 0;width: 100%;max-width: 280px;height: auto;">
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </div> <!--- End Picture Column -->
      <div style="width: 100%;max-width: 300px;display: inline-block;vertical-align: top;">
        <table width="100%" style="border-spacing: 0;font-family: sans-serif;color: #727f80;">
          <tr>
            <td style="padding: 10px;">
              <table style="border-spacing: 0;font-family: sans-serif;color: #727f80;width: 100%;
              padding-top: 20px;font-size: 16px;line-height: 20px;text-align: justify;">

                <tr>
                  <td style="padding: 10px 0;">
                    <h3 style="margin: 0;text-align: center; color: rgb(9,39,89);">` + this.header + `</h3>
                    <p style="margin: 15px; color: black;">` + this.text + `</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    </td>
  </tr>
  <!--- END PICTURE-TEXT SECTION -->`;
  }
}

export class TextPictureElement implements NewsletterElement {
  id: string;
  className = 'TextPictureElement';
  header = 'header x';
  text = 'this is just some default text which should be long enough';
  url = 'https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&h=350';

  constructor() {
    this.id = uuidv4();
  }

  createHtml() {
    return `
    <!-- TEXT-PICTURE SECTION -->
    <tr>
    <td style="padding: 5px 0 10px 0;text-align: center;font-size: 0;">
      <div style="width: 100%;max-width: 300px;display: inline-block;vertical-align: top;">
        <table width="100%" style="border-spacing: 0;font-family: sans-serif;color: #727f80;">
          <tr>
            <td style="padding: 10px;">
              <table style="border-spacing: 0;font-family: sans-serif;color: #727f80;
              width: 100%;padding-top: 20px;font-size: 16px;line-height: 20px;text-align: justify;">

                <tr>
                  <td style="padding: 10px 0;">
                    <h3 style="margin: 0;text-align: center; color: rgb(9,39,89);">` + this.header + `</h3>
                    <p style="margin: 15px; color: black;">` + this.text + `</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div> <!--- End Text Column -->
      <div style="width: 100%;max-width: 300px;display: inline-block;vertical-align: top;">
        <table width="100%" style="border-spacing: 0;font-family: sans-serif;color: #727f80;">
          <tr>
            <td style="padding: 10px;">
              <table style="border-spacing: 0;font-family: sans-serif;color: #727f80;
              width: 100%;padding-top: 20px;font-size: 16px;line-height: 20px;text-align: justify;">
                <tr>
                  <td style="padding: 0;">
                    <img src="` + this.url + `" style="border: 0;width: 100%;max-width: 280px;height: auto;">
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </div>

    </td>
  </tr>
  <!--- END TEXT-PICTURE SECTION -->`;
  }
}

export class HorizontalSeperatorElement implements NewsletterElement {
  id: string;
  className = 'HorizontalSeperatorElement';

  constructor() {
    this.id = uuidv4();
  }

  createHtml() {
    return `
    <!-- HORIZONTAL SEPERATOR SECTION -->
    <tr>
    <td style="padding-right: 12px; padding-left: 12px;">
      <hr style="border-color: lightgrey;">
    </td>
  </tr>
  <!-- END HORIZONTAL SEPERATOR SECTION -->`;
  }
}
