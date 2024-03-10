//code from cludinary we just update the tailwaind and put some props thats it
import {openUploadWidget} from "../../utils/CloudinaryService";

import {cloudinary_upload_preset} from "../../config"

const CloudinaryUpload = ({setUrl, setName}) => {
    const uploadImageWidget = () => {
        let myUploadWidget = openUploadWidget(
            {
                cloudName: "dipen3437",//name from clodinary
                uploadPreset: cloudinary_upload_preset ,//from clodinary
                sources: ["local"],//we use only local beacuse the user can upload the song from their local system only. from not from url and other 
            },
            function (error, result) {
                if (!error && result.event === "success") {
                    // console.log(result.info.secure_url);
                    setUrl(result.info.secure_url);//we get url of our song whivh is uploaded on internt
                    // console.log(result.info.original_filename);
                    setName(result.info.original_filename);
                } else {
                    if (error) {
                        console.log(error);
                    }
                }
            }
        );
        myUploadWidget.open();
    };

    return (
        <button
            className="bg-white text-black  rounded-full p-2 mt-6 font-semibold"
            onClick={uploadImageWidget}
        >
            Select Track
        </button>
    );
};

export default CloudinaryUpload;