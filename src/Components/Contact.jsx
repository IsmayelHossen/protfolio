import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import axios from "axios";
const Contact = () => {
  const LoginData = JSON.parse(localStorage.getItem("AuthData"));
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    await axios
      .post("http://127.0.0.1:8000/api/mail", data, {
        headers: {
          toemail: "ismayelhossen123@gmail.com",
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.status == 401) {
          swal(`${res.data.message}`, "", "error");
        } else {
          swal("Successfully Mail Sent,Thank You", "", "success");
          console.log(data);
          reset();
        }
      });
  };
  return (
    <div>
      <div class="container-fluid">
        <div class="About">
          <div class="contact">
            <div class="contactLeftSide">
              <h5 class="text-center text-uppercase pt-3">Contact Info</h5>
              <h6>
                {" "}
                <i
                  class="fa fa-phone customefontawesome"
                  aria-hidden="true"
                ></i>{" "}
                01952152883
              </h6>
              <h6>
                <i
                  class="fa fa-envelope-o customefontawesome"
                  aria-hidden="true"
                ></i>{" "}
                ismayelhossen123@gmail.com
              </h6>
              <h6>
                <i
                  class="fa fa-facebook customefontawesome"
                  aria-hidden="true"
                ></i>{" "}
                https://www.facebook.com/ismayel.hossen.77
              </h6>
              <h6>
                <i
                  class="fa fa-map-marker customefontawesome"
                  aria-hidden="true"
                ></i>{" "}
                Mohakhali DOSH,Dhaka,Bangladesh
              </h6>
            </div>
            <div class="contactRightSide">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div class="row mb-3 mt-3">
                  <div class="col-md-1">
                    <label for="name" class="fxorm-label">
                      <span style={{ color: "red" }}>*</span>Name
                    </label>
                  </div>
                  <div class="col-md-11">
                    <input
                      type="text"
                      class="form-control"
                      style={{ marginTop: "5px!important" }}
                      {...register("name", { required: false })}
                      placeholder="Enter Name"
                    />
                  </div>
                </div>
                <div class="row mb-3 mt-3">
                  <div class="col-md-1">
                    <label for="email" class="fxorm-label">
                      <span style={{ color: "red" }}>*</span>Email
                    </label>
                  </div>
                  <div class="col-md-11">
                    <input
                      type="email"
                      class="form-control"
                      style={{ marginTop: "5px!important" }}
                      id="email"
                      placeholder="Enter email"
                      {...register("email", { required: true })}
                    />
                  </div>
                </div>
                <div class="row mb-3 mt-3">
                  <div class="col-md-1">
                    <label for="Subject" class="fxorm-label">
                      Subject
                    </label>
                  </div>
                  <div class="col-md-11">
                    <input
                      type="text"
                      class="form-control"
                      style={{ marginTop: "5px!important" }}
                      id="Subject"
                      placeholder="Enter Subject"
                      {...register("subject")}
                    />
                  </div>
                </div>
                <div class=" row mb-3">
                  <div class="col-md-1">
                    <label
                      for="pwd"
                      class="form-label "
                      style={{ fontSize: "15px" }}
                    >
                      <span style={{ color: "red" }}>*</span>Message
                    </label>
                  </div>
                  <div class="col-md-11">
                    <textarea
                      class="form-control "
                      {...register("message", { required: true })}
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  class="btn btn-success mb-3 "
                  style={{ float: "right" }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
