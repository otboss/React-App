/**
 * Maps asset files stored in the public folder to path
 */
export abstract class Assets {
  public static hammerImg: string = "assets/image/hammer.svg";
  public static extinguisherImg: string = "";
  public static mailboxImg: string = "";
  public static doorKnobImg: string = "";
  public static exitSignImg: string = "";

  private static getMimeType = function (base64: string): string {
    base64 = base64.toUpperCase();
    if (base64.indexOf("PD94bW") == 0) {
      return "image/svg+xml";
    }
    if (base64.indexOf("IVBOR") == 0) {
      return "image/png";
    }
    if (base64.indexOf("/9J/4A") == 0) {
      return "image/jpg";
    }
    throw new Error("unsupported photo provided")
  }

  public static addMimeType(base64String: string) {
    return `data:${Assets.getMimeType(base64String.slice(0, 8))};base64,${base64String}`;
  }

  public static fetchAssetBase64 = async function (url: string): Promise<string> {
    const addMimeType = Assets.addMimeType;
    return new Promise(async function (resolve, reject) {
      try {
        const response = await fetch(url);
        const blob = await response.blob();
        var reader = new FileReader();
        reader.onload = function () {
          const base64WithMime: string = this.result != null ? this.result.toString() : "";
          const rawBase64: string = base64WithMime.slice(base64WithMime.indexOf(";base64,") + 8);
          resolve(addMimeType(rawBase64))
        };
        reader.readAsDataURL(blob);
      }
      catch (err) {
        reject(err);
      }
    });
  }
}