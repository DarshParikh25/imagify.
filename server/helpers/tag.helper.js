import { ImageTag, Tag } from "../models/index.js";
import tagsCleaning from "../utils/cleanTags.js";

export const findOrCreateTags = async (tags, image_id, transaction) => {
  // array for bulkCreate
  const joinRecords = [];

  // cleaning extra whitespaces, and removing duplicates from the tags
  const cleanTags = tagsCleaning(tags);
  console.log("clean", cleanTags);

  for (const tag of cleanTags) {
    console.log("tag", tag);

    let existingTag = await Tag.findOne({ where: { name: tag }, transaction });
    console.log("existing", existingTag);

    if (!existingTag) {
      existingTag = await Tag.create({ name: tag }, { transaction });
    }
    joinRecords.push({
      image_id,
      tag_id: existingTag.id,
    });
  }

  // Insert into ImageTag (join) table
  await ImageTag.bulkCreate(joinRecords, { transaction });
};
