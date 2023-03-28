import AddImage from "../../Assets/SVGs/AddImageSVG";

function CoverPhoto() {
  return (
    <div className="sm:col-span-6">
      <label htmlFor="cover-photo" className="block sub-heading1 leading-10 text-gray-700">
        Imagem de fundo
      </label>
      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
        <div className="space-y-1 text-center">
          <AddImage />
          <div className="flex text-sm text-gray-600">
            <label
              htmlFor="file-upload"
              className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
            >
              <span className="bg-custom-off-white">Carregar arquivo</span>
              <input id="file-upload" name="file-upload" type="file" className="sr-only" />
            </label>
            <p className="pl-1">ou arraste e solte</p>
          </div>
          <p className="text-xs text-gray-500">PNG, JPG, GIF até 10MB</p>
        </div>
      </div>
    </div>
  );
}

export default CoverPhoto;
