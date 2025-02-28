"use client";

import { useState } from "react";
import { IoTime } from "react-icons/io5";
import { cn } from "@/lib/utils";
import { useQueryStore } from "@/hooks/floppy-disk/use-queryStore";
import { useMediaQuery } from "@/hooks/use-mediaQuery";
import { Button } from "../ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "../ui/dialog";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from "../ui/drawer";
import { ScrollArea } from "../ui/scroll-area";

interface prop {
    isSearchPage?: boolean;
    displayIcon?: boolean;
    className?: string;
}

export default function TimeDialog({ isSearchPage, displayIcon, className }: prop) {
    const time = useQueryStore("time");
    const isDesktop = useMediaQuery("(min-width: 768px)");
    const [open, setOpen] = useState(false);

    const title = "Pilih Waktu Penjemputan";
    const content = (
        <ScrollArea className="h-full">
            <div className="grid grid-cols-3 items-center justify-center gap-2 md:grid-cols-5">
                {new Array(24).fill(0).map((_, i) => (
                    <Button
                        key={i}
                        variant="outline"
                        className="justify-center font-semibold"
                        onClick={handleSelect.bind(null, i)}
                    >
                        {i < 10 ? `0${i}` : i}:00
                    </Button>
                ))}
            </div>
        </ScrollArea>
    );

    function handleSelect(time?: number) {
        useQueryStore.set({ time: `${time!}` });
        setOpen(false);
    }

    function triggerButton() {
        return (
            <Button
                variant={isSearchPage ? "ghost" : "outline"}
                className={cn("justify-start font-semibold", className)}
            >
                {displayIcon && <IoTime />}
                {time.length ? (Number(time) < 10 ? `0${time}` : time) : 1}:00
            </Button>
        );
    }

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>{triggerButton()}</DialogTrigger>
                <DialogContent className="py-10" aria-describedby={undefined}>
                    <DialogHeader>
                        <DialogTitle className="text-2xl">{title}</DialogTitle>
                    </DialogHeader>
                    {content}
                    <DialogFooter className="text-sm font-medium text-foreground/60 sm:flex-col sm:space-x-0">
                        <p>* Waktu yang dipilih sesuai dengan waktu tempat di lokasi sewa.</p>
                        <p>** Pemesanan minimal dilakukan 3 jam sebelum waktu penjemputan.</p>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        );
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>{triggerButton()}</DrawerTrigger>
            <DrawerContent aria-describedby={undefined}>
                <DrawerHeader className="text-left">
                    <DrawerTitle className="text-2xl">{title}</DrawerTitle>
                </DrawerHeader>
                <div className="min-h-60 p-4">{content}</div>
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button variant="secondary">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}
