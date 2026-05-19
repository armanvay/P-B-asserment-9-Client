"use client";
import { ComboBox, Description, Input, Label, ListBox } from "@heroui/react";

const Filter = () => {
  return (
    <div>
      <ComboBox className="w-[256px]">
        <ComboBox.InputGroup>
          <Input placeholder="ALL Idea..." />
          <ComboBox.Trigger />
        </ComboBox.InputGroup>
        <ComboBox.Popover>
          <ListBox>
            <ListBox.Item id="idea" textValue="ALL Idea">
              ALL Idea
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="aardvark" textValue="Aardvark">
              Aardvark
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="cat" textValue="Cat">
              Cat
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="dog" textValue="Dog">
              Dog
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="kangaroo" textValue="Kangaroo">
              Kangaroo
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="panda" textValue="Panda">
              Panda
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="snake" textValue="Snake">
              Snake
              <ListBox.ItemIndicator />
            </ListBox.Item>
          </ListBox>
        </ComboBox.Popover>
      </ComboBox>
    </div>
  );
};

export default Filter;
