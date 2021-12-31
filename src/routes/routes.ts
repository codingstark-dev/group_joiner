import express, { Request, Response } from "express";
import { Links } from "../models/user_model";
import Category from './../models/category_models';
const router = express.Router();

//Post request

router.post("/add", async (req: Request, res: Response) => {
  const { GroupCreateAt, GroupLink, GroupName, GroupType } = req.body;


  const dataItem = Links.set({ GroupCreateAt, GroupLink, GroupName, GroupType });

  await dataItem.save();

  return res.status(200).json({
    data: dataItem,
  });
});
router.post("/addcategory", async (req: Request, res: Response) => {
  const { image, GroupType } = req.body;


  const dataItem = Category.set({ GroupType, image });

  await dataItem.save();

  return res.status(200).json({
    data: dataItem,
  });
});
//Get request

router.get("/", async (req: Request, res: Response) => {
  try {
    const dataItem = await Links.find({}).limit(200)
      .sort({ GroupCreateAt: 'desc' });

    res.status(200).json({
      links: dataItem,
    });
  } catch (error) {
    console.log(error);
  }
});
router.get("/category", async (req: Request, res: Response) => {
  try {
    const dataItem = await Category.find({})
      .sort({ GroupType: 'desc' });

    res.status(200).json({
      category: dataItem,
    });
  } catch (error) {
    console.log(error);
  }
});
router.get("/categorywise", async (req: Request, res: Response) => {
  let {type} = req.query;
  try {
    const dataItem = await Links.find({ "GroupType": type as string}, { }).limit(100)
      .sort({ GroupType: 'desc' });

    res.status(200).json({
      category: dataItem,
    });
  } catch (error) {
    console.log(error);
  }
});
//Delete Request

router.delete("/delete", async (req: Request, res: Response) => {
  const id = req.body.id;


  const dataItem = await Links.deleteOne({ _id: id })
    .then((data) =>
      res.json({
        data: data,
      })
    )
    .catch((error) => {
      return res.send(error);
    });
});

//Update request
router.put("/update", async (req: Request, res: Response) => {
  const filter = {
    id: req.body.id,
  };

  const updatedData = {
    title: req.body.title,
    description: req.body.description,
  };

  const dataItem = await Links.updateOne(filter, updatedData, {
    new: true,
  })
    .then((data) =>
      res.json({
        data: data,
      })
    )
    .catch((error) => {
      return res.send(error);
    });
});

export { router };
