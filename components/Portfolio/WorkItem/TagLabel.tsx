"use client";
import getTag from "@/lib/getTag";
import { Tag } from "@/types/Tag";
import { useEffect, useState } from "react";

const classes =
  "my-1 inline-block mr-2 lg:mr-4 px-4 pt-1 pb-2 text-xs lg:text-sm capitalize bg-labelLight dark:bg-labelDark";

export default function TagLabel({ tagId }: { tagId: number }) {
  const [tag, setTag] = useState<Tag | null>(null);

  useEffect(() => {
    getTag(tagId).then((data) => {
      setTag(data);
    });
  }, [tagId]);

  return tag && <span className={classes}>{tag.name}</span>;
}
