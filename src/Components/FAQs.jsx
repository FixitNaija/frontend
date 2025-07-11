import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function FAQs() {
  return (
    <div
      id="FAQ"
      className=" font-poppins bg-white border-b-blue-900 max-w-[1240px] mt-[24px] mx-auto"
    >
      <div className="p-[16px] sm:p-[24px] lg:p-[100px]">
        <div>
          <h1 className="text-[40px] lg:text-[48px] leading-[60px] sm:leading-[72px] font-poppins font-[700] text-[#333] text-center">
            You Asked, We Answered
          </h1>
          <p className="sm:text-[16px] font-poppins text-[#010f06] text-center mt-[10px] mb-[24px]">
            Find answers to your questions about our platform and its features
            below.
          </p>
        </div>
        <div className="w-full sm:max-w-[90%] lg:w-[1024px] mx-auto content-center">
          <Accordion
            sx={{
              backgroundColor: "#F3F9F5",
              width: "100%",
              margin: "10px",
              alignTracks: "center",
            }}
          >
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              {/* <div  style={{ backgroundColor: '#F3F9F5',width: '100%', padding:'5px' }}> */}
              <div>
                <Typography
                  component="span"
                  sx={{
                    backgroundColor: "inherit",
                    width: "100%",
                    padding: "5px",
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "24px",
                  }}
                >
                  {" "}
                  What is Fix it Naija all about?{" "}
                </Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: "#FFF", padding: "5px" }}>
              {/* <div  style={{ backgroundColor: '#F3F9F5', padding: '0px' }}> */}
              <div>
                <Typography
                  sx={{
                    backgroundColor: "inherit",
                    width: "100%",
                    padding: "5px",
                  }}
                >
                  Fix it Naija is a civic tech platform that helps you report
                  public infrastructure problems in your neighborhood-like
                  broken street light , potholes, leaking pipes and more so they
                  can get the right attention.
                </Typography>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              backgroundColor: "#F3F9F5",
              width: "100%",
              margin: "10px",
              alignTracks: "center",
            }}
          >
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              {/* <div  style={{ backgroundColor: '#F3F9F5',width: '100%', padding:'5px' }}> */}
              <div>
                <Typography
                  component="span"
                  sx={{
                    backgroundColor: "inherit",
                    width: "100%",
                    padding: "5px",
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "24px",
                  }}
                >
                  {" "}
                  How do i report an issue?{" "}
                </Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: "#FFF", padding: "5px" }}>
              {/* <div  style={{ backgroundColor: '#F3F9F5', padding: '0px' }}> */}
              <div>
                <Typography
                  sx={{
                    backgroundColor: "inherit",
                    width: "100%",
                    padding: "5px",
                  }}
                >
                  Just take a photo, add a short description, and share the
                  location .You can do it all from your phone under 2 minutes.
                </Typography>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              backgroundColor: "#F3F9F5",
              width: "100%",
              margin: "10px",
              alignTracks: "center",
            }}
          >
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              {/* <div  style={{ backgroundColor: '#F3F9F5',width: '100%', padding:'5px' }}> */}
              <div>
                <Typography
                  component="span"
                  sx={{
                    backgroundColor: "inherit",
                    width: "100%",
                    padding: "5px",
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "24px",
                  }}
                >
                  {" "}
                  Who sees the reports i make?{" "}
                </Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: "#FFF", padding: "5px" }}>
              {/* <div  style={{ backgroundColor: '#F3F9F5', padding: '0px' }}> */}
              <div>
                <Typography
                  sx={{
                    backgroundColor: "inherit",
                    width: "100%",
                    padding: "5px",
                  }}
                >
                  We send the reports to the right local authorities and track
                  them. Some reports may also be visible on the map for
                  transparency.
                </Typography>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              backgroundColor: "#F3F9F5",
              width: "100%",
              margin: "10px",
              alignTracks: "center",
            }}
          >
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              {/* <div  style={{ backgroundColor: '#F3F9F5',width: '100%', padding:'5px' }}> */}
              <div>
                <Typography
                  component="span"
                  sx={{
                    backgroundColor: "inherit",
                    width: "100%",
                    padding: "5px",
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "24px",
                  }}
                >
                  {" "}
                  Is it free to use?{" "}
                </Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: "#FFF", padding: "5px" }}>
              {/* <div  style={{ backgroundColor: '#F3F9F5', padding: '0px' }}> */}
              <div>
                <Typography
                  sx={{
                    backgroundColor: "inherit",
                    width: "100%",
                    padding: "5px",
                  }}
                >
                  Yes! Fixit Naija is completely free. Just open the platform
                  ,report the issue, we’ll take it from there.
                </Typography>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              backgroundColor: "#F3F9F5",
              width: "100%",
              margin: "10px",
              alignTracks: "center",
            }}
          >
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              {/* <div  style={{ backgroundColor: '#F3F9F5',width: '100%', padding:'5px' }}> */}
              <div>
                <Typography
                  component="span"
                  sx={{
                    backgroundColor: "inherit",
                    width: "100%",
                    padding: "5px",
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "24px",
                  }}
                >
                  {" "}
                  What kind of problems can i report?{" "}
                </Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: "#FFF", padding: "5px" }}>
              {/* <div  style={{ backgroundColor: '#F3F9F5', padding: '0px' }}> */}
              <div>
                <Typography
                  sx={{
                    backgroundColor: "inherit",
                    width: "100%",
                    padding: "5px",
                  }}
                >
                  You can report anything affecting your neighborhood-potholes,
                  blocked drainage, streetlight issues, open manholes,
                  overflowing wastebin and more.
                </Typography>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              backgroundColor: "#F3F9F5",
              width: "100%",
              margin: "10px",
              alignTracks: "center",
            }}
          >
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              {/* <div  style={{ backgroundColor: '#F3F9F5',width: '100%', padding:'5px' }}> */}
              <div>
                <Typography
                  component="span"
                  sx={{
                    backgroundColor: "inherit",
                    width: "100%",
                    padding: "5px",
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "24px",
                  }}
                >
                  {" "}
                  Do i need to signup to report something?{" "}
                </Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: "#FFF", padding: "5px" }}>
              {/* <div  style={{ backgroundColor: '#F3F9F5', padding: '0px' }}> */}
              <div>
                <Typography
                  sx={{
                    backgroundColor: "inherit",
                    width: "100%",
                    padding: "5px",
                  }}
                >
                  Yes, you need to signup before making a report. This helps us
                  track your report , provide updates ,and ensure accountability
                  .It also allows you to follow up on the status of your report
                  anytime.
                </Typography>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              backgroundColor: "#F3F9F5",
              width: "100%",
              margin: "10px",
              alignTracks: "center",
            }}
          >
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              {/* <div  style={{ backgroundColor: '#F3F9F5',width: '100%', padding:'5px' }}> */}
              <div>
                <Typography
                  component="span"
                  sx={{
                    backgroundColor: "inherit",
                    width: "100%",
                    padding: "5px",
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "24px",
                  }}
                >
                  {" "}
                  Can i report anonymously?{" "}
                </Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: "#FFF", padding: "5px" }}>
              {/* <div  style={{ backgroundColor: '#F3F9F5', padding: '0px' }}> */}
              <div>
                <Typography
                  sx={{
                    backgroundColor: "inherit",
                    width: "100%",
                    padding: "5px",
                  }}
                >
                  Yes! You don’t have to share your name or phone number if you
                  don’t want to. Just report and go.
                </Typography>
              </div>
            </AccordionDetails>
          </Accordion>
          <div className="flex flex-col justify-center items-center align-middle">
            <p className="text-[16px] font-Poppins sm:text-[24px] font-[500] leading-[48px] ">
              {" "}
              Do You Still Have Questions ?
            </p>
            <button className="text-white bg-[#15803D] mt-[24px] rounded-[8px] h-[48px] w-[200px] p-[5px] mb-[100px]">
              {" "}
              Reach Out to Us{" "}
            </button>
          </div>
        </div>
               
        <div className="mt-[24px] mb-[60px] " >
          <div  className="">
            <div  className="max-w-[1240px] py-[40px] bg-[#E8FFD9] rounded-[40px] text-center font-poppins">
              <h1 id="News" className=" text-[40px] sm:text-[48px] font-[600] leading-[60px] text-center text-[#333333] font-poppins w-[90%] mx-auto">
                {" "}
                Subscribe to our Newsletter
              </h1>
              <p className=" text-[16px] font-poppins p-[4px] font-[400] leading-[24px] text-center text-[#333333] px-[17px] pb-[40px] ">
                Join our newsletter to stay informed on our latest features and
                updates.
              </p>
              <div className="mb-[20px]  ">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="  mt-[1px] pl-[24px] w-[174px] sm:w-[326px]  md:w-[502px] h-[48px] text-[16px]  font-poppins border border-[#15803D] bg-[#ffff] rounded-l-[40px] "
                />
                <button className="w-[110px] h-[48px] text-white bg-[#15803D] rounded-r-[40px] cursor-pointer font-poppins text-[16px] font-[500] leading-[24px] hover:bg-[#A1EEAF]">
                  {" "}
                  Subscribe{" "}
                </button>

                <p className=" text-[16px] font-poppins py-[16px] ">
                  By subscribing, you agree to our Privacy Policy and consent to
                  receive updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
