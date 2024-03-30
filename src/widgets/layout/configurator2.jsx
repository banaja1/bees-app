import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  Button,
  IconButton,
  Typography,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import {
  useMaterialTailwindController,
  setOpenConfigurator2,
  setSidenavType,
} from "@/context";
import { CreateStory, CreateEpic } from "../cards";
import {DialogContent } from '@mui/material';

export function Configurator2() {
  const [open, setOpen] = React.useState(false);
  const [openEpic, setOpenEpic] = React.useState(false);
  const [controller, dispatch] = useMaterialTailwindController();
  const { openConfigurator2 } =
    controller;

  const createStory = () => {
    setOpenConfigurator2(dispatch, false)
    setOpen(!open);
  }

  const createEpic = () => {
    setOpenConfigurator2(dispatch, false)
    setOpenEpic(!openEpic);
  }

  const handleOpen = () => {
    setOpen(!open);
  }

  const handleOpenEpic = () => {
    setOpenEpic(!openEpic);
  }

  return (
    <aside
      className={`fixed top-0 right-0 z-50 h-screen w-96 bg-white px-2.5 shadow-lg transition-transform duration-300 ${
        openConfigurator2 ? "translate-x-0" : "translate-x-96"
      }`}
    >
      <div className="flex items-start justify-between px-6 pt-8 pb-6">
        <div>
          <Typography variant="h5" color="blue-gray">
            Create
          </Typography>
          <Typography className="font-normal text-blue-gray-600">
            See our create options.
          </Typography>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          onClick={() => setOpenConfigurator2(dispatch, false)}
        >
          <XMarkIcon strokeWidth={2.5} className="h-5 w-5" />
        </IconButton>
      </div>
      <div className="py-4 px-6">
        <div className="mb-12">
          <div className="mt-3 flex items-center gap-2">
            <Button
              variant="outlined"
              onClick={() => createStory()}
            >
              Create Story
            </Button>
            <Button
              variant="outlined"
              onClick={() => createEpic()}
            >
              Create Epic
            </Button>
          </div>
        </div>
      </div>
      <Dialog open={open} handler={handleOpen} maxWidth="sm" fullWidth>
        <DialogContent dividers style={{ overflowY: 'auto', maxHeight: '600px' }}>
          <DialogHeader></DialogHeader>
          <div className="pl-6">
          </div>
          <DialogBody>
            <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <CreateStory/>
            </CardBody>
          </DialogBody>
        </DialogContent>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
        </DialogFooter>
      </Dialog> 
      <Dialog open={openEpic} handler={handleOpenEpic} maxWidth="sm" fullWidth>
        <DialogContent dividers style={{ overflowY: 'auto', maxHeight: '600px' }}>
          <DialogHeader></DialogHeader>
          <div className="pl-6">
          </div>
          <DialogBody>
            <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <CreateEpic/>
            </CardBody>
          </DialogBody>
        </DialogContent>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpenEpic}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
        </DialogFooter>
      </Dialog> 
    </aside>
  );
}

Configurator2.displayName = "/src/widgets/layout/configurator2.jsx";

export default Configurator2;
