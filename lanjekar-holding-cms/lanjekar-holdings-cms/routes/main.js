const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const slugify = require("slugify");
const slug = require("slug");
const { create } = require("xmlbuilder2");
const nodemailer = require("nodemailer");
const request = require("request");
const axios = require("axios");
require("dotenv").config();

// Model
const User = require("../models/User");
const Blog = require("../models/Blog");
const Testimonial = require("../models/Testimonial");
const CaseStudy = require("../models/CaseStudy");
const Client = require("../models/Client");
const Career = require("../models/Career");
const Contact = require("../models/Contact");
const Team = require("../models/Team");
const NewsLetter = require("../models/Newsletter");
const Category = require("../models/Category");
const Gallery = require("../models/Gallery");
const Permission = require("../models/Permission");
const BusinessCategory = require("../models/BusinessCategory");
const Company = require("../models/Company");
const Industry = require("../models/Industry");
const Service = require("../models/Service");
const CommunityEngagement = require("../models/CommunityEngagement");
const Technology = require("../models/Technology");
const TechnologyCard = require('../models/TechnologyCard')
const Faq = require('../models/Faq');

// Multer Storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "assets/uploads/");
  },
  filename: function (req, file, cb) {
    const originalname = path.basename(
      file.originalname,
      path.extname(file.originalname)
    );
    const filename = `${originalname}-${Date.now()}${path.extname(
      file.originalname
    )}`;
    cb(null, filename);
  },
});

const maxSize = 18 * 1024 * 1024;
const upload = multer({ storage: storage, limits: { fileSize: maxSize } });
const single = multer().single("image");
const multiple = multer().array("images", 10);

var imageUpload = upload.fields([
  { name: "image", maxCount: 1 },
  { name: "banner", maxCount: 1 },
  { name: "logo", maxCount: 1 },
  { name: "icon", maxCount: 1 },
  { name: "images", maxCount: 10 },
]);

// Editor Media Upload

router.post("/upload-editor-media", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  const fileUrl = `https://cms.lanjekar.com/uploads/${req.file.filename}`;
  res.status(200).json({
    url: fileUrl,
  });
});

// Website Code

router.get("/", async (req, res) => {
  try {
    // Fetch testimonials, latest blogs, and clients
    const testimonials = await Testimonial.find()
      .sort({ createdAt: -1 })
      .limit(2);
    const latestblog = await Blog.find({ action: "Publish" })
      .sort({ createdAt: -1 })
      .limit(2);
    const clients = await Client.find();

    // Fetch business categories and their respective companies for OurBusiness section
    const businessCategories = await BusinessCategory.find();

    const slug = req.query.slug; // Ensure the `slug` is coming from the request
    const company = await Company.findOne({ slug }).populate("category");

    // Combine business categories with their respective companies
    const businesses = businessCategories.map((category) => ({
      category,
      company:
        company && company.category.equals(category._id) ? [company] : [], // Check if company is not null
    }));

    // Send the data to the frontend
    res.status(200).json({ latestblog, testimonials, clients, businesses });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/business-categories", async (req, res) => {
  try {
    const categories = await BusinessCategory.find({});
    res.status(200).json({ categories });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/business-categories/:slug", async (req, res) => {
  const slug = req.params.slug;

  try {
    const category = await BusinessCategory.findOne({ slug: slug });

    if (!category) {
      return res.status(404).send("Category not found");
    }

    const companies = await Company.find({ category: category._id });

    res.status(200).json({ category, companies });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/businesses", async (req, res) => {
  try {
    const companies = await Company.find().populate("category");

    if (!companies) {
      return res.status(404).send("Companies not found");
    }

    res.status(200).json({ companies });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/business/:company", async (req, res) => {
  const slug = req.params.company;

  try {
    // Fetch the company by slug
    const company = await Company.findOne({ slug }).populate("category"); // Populate category for the company

    if (!company) {
      return res.status(404).send("Company not found");
    }

    // Fetch related industries
    const industries = await Industry.find({ company: company._id });

    // Fetch related services
    const services = await Service.find({ company: company._id });

    // Combine all data in the response
    res.status(200).json({
      company,
      industries,
      services,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/service", async (req, res) => {
  try {
    const services = await Service.find({});
    console.log(services);
    res.send({ services });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/service/:slug", async (req, res) => {
  const { slug } = req.params;

  try {
    const service = await Service.findOne({ slug: slug });
    if (!service) {
      return res.status(404).json({ error: "Service not found" });
    }

    res.status(200).json({ service });
  } catch (error) {
    console.error("Error in /service/:slug route:", error.stack);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
});

// industries-api

router.get("/industries", async (req, res) => {
  try {
    const industries = await Industry.find({});
    console.log(industries);
    res.status(200).json({ industries });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/industries/:slug", async (req, res) => {
  const { slug } = req.params;

  try {
    const industry = await Industry.findOne({ slug: slug });

    res.status(200).json({ industry });
  } catch (error) {
    console.error("Error in /industries/:slug route:", error.stack);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
});

//api
router.get("/team", async (req, res) => {
  try {
    const team = await Team.find({});
    console.log(team);
    res.send({ team: team });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/team/:slug", async (req, res) => {
  const { slug } = req.params;

  try {
    const team = await Team.findOne({ slug });
    if (!team) {
      return res.status(404).json({ error: "Service not found" });
    }

    res.status(200).json({ team });
  } catch (error) {
    console.error("Error in /team/:slug route:", error.stack);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
});

// api
router.get("/careers", async (req, res) => {
  try {
    const careers = await Career.find({});
    console.log(careers);
    // res.render("careers", { careers });
    res.send({ careers });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/careers/:slug", async (req, res) => {
  const { slug } = req.params;
  try {
    const careers = await Career.find({ slug: slug });
    if (!careers) {
      return res.status(404).send("Careers not found");
    }
    res.status(200).json({ careers });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/careers/:business/:slug", async (req, res) => {
  const businessSlug = req.params.business; // Business slug
  const careerSlug = req.params.slug; // Career slug
  try {
    // Fetch company by businessSlug
    const company = await Company.findOne({ slug: businessSlug });
    // Fetch career by careerSlug
    const career = await Career.findOne({ slug: careerSlug });
    if (!career) {
      return res.status(404).send("Career not found");
    }
    res.status(200).json({ career, company });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});


// Technologies
router.get("/technologies", async (req, res) => {
  try {
    const technologies = await Technology.find({});
    res.send(technologies);
    console.log(technologies);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/technologies/:slug", async (req, res) => {
  const { slug } = req.params;
  try {
    const technology = await Technology.findOne({ slug: slug });
    const cardData=await TechnologyCard.findOne({})
    if (!technology &&  cardData) {
      return res.status(404).send("Technologies not found");
    }
    res.status(200).json({ technology , cardData});
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});


//
router.get("/community-engagement", async (req, res) => {
  try {
    const engagements = await CommunityEngagement.find(); // Populate if needed
    res.status(200).json({ engagements });
  } catch (error) {
    console.error("Error fetching community engagements:", error);
    res.status(500).send("Internal Server Error");
  }
});

// NEWSLETTER

router.post("/news-letter", async (req, res) => {
  const abc = req.body.email;

  const transporter = nodemailer.createTransport({
    service: "SMTP",
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,

    auth: {
      user: process.env.GMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL,
    to: abc,
    subject: "Newsletter Subscription Confirmation from Lanjekar Holdings",
    text: "Thank you for subscribing to our newsletter!",
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log("NewsLetter Email sent successfully");
      res.redirect("/");
    }
  });
});
// NEWSLETTER END

router.post("/contact-us", async (req, res) => {
  try {
    const {
      token,
      fullname,
      firstName,
      lastName,
      email,
      companyName,
      subject,
      phone,
      message,
      requirements,
      url,
    } = req.body;
    console.log(req.body);
    if (!token) {
      console.log("Token is undefined");
      return res.status(400).send("Captcha is undefined!");
    }

    const secretKey = process.env.RECAPTCHA_KEY;
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify`;

    // Verify reCAPTCHA
    const response = await axios.post(verifyUrl, null, {
      params: {
        secret: secretKey,
        response: token,
      },
    });
    const body = response.data;
    console.log(body);

    if (!body.success || body.success === undefined || body.success === false) {
      return res
        .status(400)
        .send(
          "Your Captcha Verification failed. Please, call us on +91 79776 46886"
        );
    } else if (body.score < 0.8) {
      return res
        .status(400)
        .send(
          "It seems like you are a bot and if we are mistaken. Please, call us on +91 79776 46886"
        );
    }

    // Save contact details
    await new Contact({
      fullname,
      email,
      phone,
      subject,
      companyName,
      requirements,
      message,
      url,
    }).save();
    // return
    // Send email
    const transporter = nodemailer.createTransport({
      service: "SMTP",
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL,
        pass: process.env.PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL,
      // to: 'saeed.lanjekar@gmail.com", "abdussalam@sovorun.com',
      to: "ayaan@sovorun.com",
      subject: "This message is from Lanjekar Holdings Website",
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nRequirement: ${requirements}\nSubject:${subject}\n companyName:${companyName}\n Message: ${message}\nURL: ${url}`,
    };

    await transporter.sendMail(mailOptions);

    return res
      .status(200)
      .send(
        "We have received your message and will get back to you as soon as possible."
      );
  } catch (error) {
    console.error(error);
    return res.status(400).send("Message Sent Failed. Please, Try Again!");
  }
});

router.post("/customer-support", async (req, res) => {
  try {
    const {
      token,
      firstName,
      lastName,
      email,
      phone,
      subject,
      product,
      requirement,
      url,
    } = req.body;
    console.log(req.body);
    if (!token) {
      console.log("Token is undefined");
      return res.status(400).send("Captcha is undefined!");
    }

    const secretKey = process.env.RECAPTCHA_KEY;
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify`;

    // Verify reCAPTCHA
    const response = await axios.post(verifyUrl, null, {
      params: {
        secret: secretKey,
        response: token,
      },
    });
    const body = response.data;
    console.log(body);

    if (!body.success || body.success === undefined || body.success === false) {
      return res
        .status(400)
        .send(
          "Your Captcha Verification failed. Please, call us on +91 79776 46886"
        );
    } else if (body.score < 0.8) {
      return res
        .status(400)
        .send(
          "It seems like you are a bot and if we are mistaken. Please, call us on +91 79776 46886"
        );
    }

    // Save contact details
    await new Contact({
      firstName,
      lastName,
      email,
      phone,
      subject,
      product,
      requirement,
      url,
    }).save();
    // return
    // Send email
    const transporter = nodemailer.createTransport({
      service: "SMTP",
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL,
        pass: process.env.PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL,
      to: 'saeed.lanjekar@gmail.com", "abdussalam@sovorun.com',
      subject: "This message is from Lanjekar Holdings Website",
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\nProduct: ${product}\nRequirement: ${requirement}\nURL: ${url}`,
    };

    await transporter.sendMail(mailOptions);

    return res
      .status(200)
      .send(
        "We have received your message and will get back to you as soon as possible."
      );
  } catch (error) {
    console.error(error);
    return res.status(400).send("Message Sent Failed. Please, Try Again!");
  }
});

// Career Form start
router.post("/career-form", upload.single("resume"), async (req, res) => {
  try {
    const { token, firstName, email, phone, message } = req.body;
    console.log(req.body);

    if (!token) {
      return res.status(400).send("Captcha is undefined!");
    }

    const secretKey = process.env.RECAPTCHA_KEY;
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify`;

    // Verify reCAPTCHA
    const response = await axios.post(verifyUrl, null, {
      params: {
        secret: secretKey,
        response: token,
      },
    });

    const body = response.data;

    if (!body.success || body.score < 0.8) {
      return res.status(400).send("Captcha verification failed.");
    }

    // Save contact details
    const contact = new Contact({
      firstName,
      email,
      phone,
      message,
      file: req.file ? req.file.filename : undefined, // Save filename in database
    });

    await contact.save();

    // Send email
    const transporter = nodemailer.createTransport({
      service: "SMTP",
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL,
        pass: process.env.PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL,
      to: 'saeed.lanjekar@gmail.com", "abdussalam@sovorun.com',
      subject: "This message is from Lanjekar Holdings Careers form",
      text: `Name: ${firstName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
      attachments: req.file
        ? [
            {
              filename: req.file.originalname,
              path: req.file.path,
            },
          ]
        : [],
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return res.status(500).send("Error sending email");
      }
      res.send("Message sent successfully");
    });
  } catch (error) {
    console.error("Error processing form submission:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find({ action: "Publish" })
      .populate("author")
      .populate("category");
    const category = await Category.find({});

    res.status(200).json({ blogs, category });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/blogs/:slug", async (req, res) => {
  try {
    const slug = req.params.slug;

    const blog = await Blog.findOne({ slug }).populate("author");

    if (!blog) {
      return res.status(404).json({ message: "Blog post not found" });
    }

    const relatedBlogs = await Blog.find({ _id: { $ne: blog._id } })
      .populate("author")
      .limit(2);

    res.status(200).json({
      blog,
      relatedBlogs,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Admin Code Start

router.get("/admin", (req, res) => {
  res.redirect("/login");
});

// Register view
router.get("/register", (req, res) => {
  res.render("register", { message: null });
});

// Register user
router.post("/register", async (req, res) => {
  try {
    const { name, email, phone, password, confirm_password } = req.body;
    if (password.length < 8) {
      res.status(500).json({
        error: "Password is too short, must be atleast of 8 characters.",
      });
    }
    if (password != confirm_password) {
      res
        .status(500)
        .json({ error: "Password & Confirm Password does not match." });
    }
    // Check if any user exists
    const count = await User.countDocuments({});
    const role = count === 0 ? "Admin" : "User";

    // Create a new user
    const user = new User({ name, email, phone, password, role });

    // Save the user to the database
    await user.save();

    res.redirect("/login");
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Login view
router.get("/login", (req, res) => {
  res.render("login", { message: null });
});

// Login user
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by username
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Store user information in session
    req.session.user = {
      userId: user._id,
      role: user.role,
    };

    res.redirect("/dashboard");
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/logout", (req, res) => {
  // Clear the session data
  req.session.destroy((err) => {
    if (err) {
      console.error("Failed to destroy session:", err);
    }
    // Redirect the user to the login page after logout
    res.redirect("/login");
  });
});

function checkUserRole(allowedRoles) {
  return function (req, res, next) {
    if (req.session.user && allowedRoles.includes(req.session.user.role)) {
      next();
    } else {
      res.status(403).json({ error: "Forbidden" });
    }
  };
}

function checkModelPermission(Permission) {
  return async function (req, res, next) {
    const { modelName } = req.params;
    const { user } = req.session;

    try {
      if (user.role == "Admin") {
        next();
        return;
      }
      const permission = await Permission.findOne({
        model: modelName,
        role: user.role,
      });
      if (permission && permission.operations.includes(req.method)) {
        next();
      } else {
        res.status(403).json({ error: "Forbidden" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
}

router.get(
  "/dashboard",
  checkUserRole(["Staff", "Admin"]),
  async (req, res) => {
    try {
      const userId = req.session.user.userId;
      const user = await User.findOne({ _id: userId });
      const allModels = mongoose.modelNames();

      res.render("dashboard", { allModels, user });
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal server error");
    }
  }
);

router.get(
  "/list/:modelName",
  checkModelPermission(Permission),
  async (req, res) => {
    const modelName = req.params.modelName;
    const userId = req.session.user.userId;
    const user = await User.findOne({ _id: userId });
    const allModels = mongoose.modelNames();
    try {
      // Retrieve all the data of the specified model from the database
      const Model = mongoose.model(modelName);
      const schema = Model.schema;
      const data = await Model.find().sort({ updatedAt: -1 });

      res.render("list", { modelName, data, user, schema, allModels, Model });
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  }
);

// Update form route
router.get(
  "/list/:modelName/update/:id",
  checkModelPermission(Permission),
  async (req, res) => {
    try {
      const { modelName, id } = req.params;
      const Model = mongoose.model(modelName);
      const document = await Model.findById(id);
      const userId = req.session.user.userId;
      const user = await User.findOne({ _id: userId });
      const allModels = mongoose.modelNames();
      if (!document) {
        return res.status(404).json({ error: "Document not found" });
      }

      const schema = Model.schema;

      const relatedSchemas = {}; // Store related schemas here

      // Retrieve related data
      const relatedFields = Object.values(schema.paths).filter(
        (field) => field.options.ref
      );

      for (const field of relatedFields) {
        relatedSchemas[field.options.ref] = await mongoose
          .model(field.options.ref)
          .find({});
      }

      res.render("update", {
        modelName,
        document,
        model: Model,
        mongoose,
        user,
        allModels,
        relatedSchemas,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

// Update route
router.post(
  "/list/:modelName/update/:id",
  checkModelPermission(Permission),
  imageUpload,
  async (req, res) => {
    const modelName = req.params.modelName;
    const id = req.params.id;
    // Find the model schema based on the modelName
    const Model = mongoose.model(modelName);
    try {
      // Find the document by its ID
      const document = await Model.findById(id);

      // Update the document fields based on the request body
      for (const field in req.body) {
        document[field] = req.body[field];
      }

      if (req.files) {
        if (req.files.image && req.files.image.length > 0) {
          const oldImagePath = document.image.replace(
            "/uploads/",
            "public/uploads/"
          );
          try {
            fs.unlinkSync(oldImagePath);
          } catch (err) {
            console.error(`Error deleting old image: ${err}`);
          }
          document.image = `/uploads/${req.files.image[0].filename}`;
        }
        if (req.files.banner && req.files.banner.length > 0) {
          const oldImagePath = document.banner.replace(
            "/uploads/",
            "public/uploads/"
          );
          try {
            fs.unlinkSync(oldImagePath);
          } catch (err) {
            console.error(`Error deleting old image: ${err}`);
          }
          document.banner = `/uploads/${req.files.banner[0].filename}`;
        }
        if (req.files.logo && req.files.logo.length > 0) {
          const oldImagePath = document.logo.replace(
            "/uploads/",
            "public/uploads/"
          );
          try {
            fs.unlinkSync(oldImagePath);
          } catch (err) {
            console.error(`Error deleting old image: ${err}`);
          }
          document.logo = `/uploads/${req.files.logo[0].filename}`;
        }
        if (req.files.images && req.files.images.length > 0) {
          document.images.forEach((oldImageUrl) => {
            // Extract the filename from the URL
            const oldImageFilename = oldImageUrl.split("/").pop();
            // Construct the path to the old image
            const oldImagePath = `public/uploads/${oldImageFilename}`;
            try {
              fs.unlinkSync(oldImagePath);
            } catch (err) {
              console.error(`Error deleting old image: ${err}`);
            }
          });
          const imageUrls = req.files.images.map(
            (file) => `/uploads/${file.filename}`
          );
          document.images = imageUrls;
        }
      }
      // Save the updated document
      await document.save();

      res.redirect(`/list/${modelName}`);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

router.get(
  "/list/:modelName/create",
  checkModelPermission(Permission),
  async (req, res) => {
    const modelName = req.params.modelName;
    const model = mongoose.model(modelName);
    const schema = model.schema;
    const userId = req.session.user.userId;
    const user = await User.findOne({ _id: userId });
    const allModels = mongoose.modelNames();
    const relatedSchemas = {}; // Store related schemas here

    // Retrieve related data
    const relatedFields = Object.values(schema.paths).filter(
      (field) => field.options.ref
    );

    for (const field of relatedFields) {
      relatedSchemas[field.options.ref] = await mongoose
        .model(field.options.ref)
        .find({});
    }
    res.render("create", {
      modelName,
      schema,
      mongoose,
      user,
      allModels,
      relatedSchemas,
    });
  }
);

// Define the POST route for creating a document
router.post(
  "/list/:modelName/create",
  checkModelPermission(Permission),
  imageUpload,
  async (req, res) => {
    const modelName = req.params.modelName;
    const Model = mongoose.model(modelName);

    try {
      // Create a new document using the Model
      const document = new Model(req.body);

      if (req.files) {
        if (req.files.image) {
          document.image = `/uploads/${req.files.image[0].filename}`;
        }
        if (req.files.banner) {
          document.banner = `/uploads/${req.files.banner[0].filename}`;
        }
        if (req.files.logo) {
          document.logo = `/uploads/${req.files.logo[0].filename}`;
        }
        if (req.files.images) {
          const imageUrls = req.files.images.map(
            (file) => `/uploads/${file.filename}`
          );
          document.images = imageUrls;
        }
      }

      await document.save();

      res.redirect(`/list/${modelName}`);
    } catch (error) {
      console.error(error);
      res.status(500).send("An error occurred while saving the document.");
    }
  }
);

// DELETE route for deleting a document by ID
router.post(
  "/list/:modelName/delete/:id",
  checkModelPermission(Permission),
  async (req, res) => {
    const modelName = req.params.modelName;
    const id = req.params.id;

    try {
      // Find the model based on the provided modelName
      const model = mongoose.model(modelName);

      // Delete the document by ID
      await model.findByIdAndDelete(id);

      res.redirect(`/list/${modelName}`);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
);



// Api for faqs
// router.get("/faqs", async (req, res) => {
//   try {
//     const { question, answer, category } = req.body;

//     // Create new FAQ instance
//     const newFaq = new Faq({
//       question,
//       answer,
//       category,
//     });

//     await newFaq.save();
//     res.status(200).json(newFaq);
//   } catch (error) {
//     console.error(error);
//     res.status(400).send("Bad Request");
//   }
// });




// GET Endpoint: Retrieve FAQs
router.get("/faqs", async (req, res) => {
  try {
    const faqs = await Faq.find({});
    console.log(faqs);
    res.send({ faqs });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});



module.exports = router;


