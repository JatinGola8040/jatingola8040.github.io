import toast, { Toaster } from "react-hot-toast";

const copyURL = () => {
    navigator.clipboard.writeText("https://https://github.com/JatinGola8040/");
    toast('Copied URL!', {
        icon: '🌐',
        position: "top-left",
        style: {
            border: "1px solid #ebebeb",
            boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.225)",
            borderRadius: "28px",
            fontFamily: "Inter",
            color: "#1d1d1f",
            fontSize: "14px"
        }
      });
}

export default copyURL;