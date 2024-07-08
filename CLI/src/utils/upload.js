import axios from "axios";

const upload = async (file) => {
  const Data = new FormData();
  Data.append("file", file);
  Data.append("upload_preset", "fiverr");

  try {
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/de33aytdi/image/upload",
      Data
    );
    const { url } = res.data;
    return url;
  } catch (error) {
    console.log(error);
  }
};

export default upload;
