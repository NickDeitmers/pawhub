import React from "react";
import { Breadcrumb } from "../../components";

const EditProfile = () => {
  return (
    <div className="body-wrapper space-pb--120">
      <Breadcrumb pageTitle="تعديل الملف الشخصي" />
      <div className="edit-profile-body">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* edit profile form */}
              <div className="edit-profile-form text-right">
                <form>
                  <div className="edit-profile-form__single-field space-mb--30">
                    <label htmlFor="fullName">الاسم الكامل</label>
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      placeholder="أدخل الاسم الكامل"
                    />
                  </div>
                  <div className="edit-profile-form__single-field space-mb--30">
                    <label htmlFor="userName">اسم المستخدم</label>
                    <input
                      type="text"
                      name="userName"
                      id="userName"
                      placeholder="ادخل اسم المستخدم"
                    />
                  </div>
                  <div className="edit-profile-form__single-field space-mb--30">
                    <label htmlFor="phoneNo">هاتف</label>
                    <input
                      type="text"
                      name="phoneNo"
                      id="phoneNo"
                      placeholder="أدخل رقم الهاتف"
                    />
                  </div>
                  <div className="edit-profile-form__single-field space-mb--30">
                    <label htmlFor="emailAddress">
                      عنوان البريد الالكترونى
                    </label>
                    <input
                      type="text"
                      name="emailAddress"
                      id="emailAddress"
                      placeholder="أدخل عنوان البريد الالكتروني"
                    />
                  </div>
                  <div className="edit-profile-form__single-field space-mb--30">
                    <label htmlFor="shippingAddress">عنوان الشحن</label>
                    <textarea
                      name="shippingAddress"
                      id="shippingAddress"
                      cols={30}
                      rows={5}
                      placeholder="أدخل عنوان الشحن"
                      defaultValue={""}
                    />
                  </div>
                  <button className="edit-profile-form__button">تحديث</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
