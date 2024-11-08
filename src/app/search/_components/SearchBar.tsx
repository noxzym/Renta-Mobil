"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { IoSearch } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import DurationDialog from "@/components/dialog/DurationDialog";
import LocationDialog from "@/components/dialog/LocationDialog";
import ScheduleDialog from "@/components/dialog/ScheduleDialog";
import TimeDialog from "@/components/dialog/TimeDialog";

export default function SearchBar() {
    const searchParams = useSearchParams();
    return (
        <section className="sticky top-[92px] z-10 flex w-full items-center justify-between rounded-xl border bg-background px-4 py-2 shadow">
            <div className="flex items-center">
                <IoSearch size={20} />
                <LocationDialog />
                <Separator orientation="vertical" className="h-10" />
                <ScheduleDialog />
                •
                <TimeDialog />
                <Separator orientation="vertical" className="h-10" />
                <DurationDialog />
            </div>
            <Button
                className="h-fit w-fit rounded-lg bg-[rgba(11,95,204,.1)] py-1 text-[#1877F2] hover:bg-[rgba(11,95,204,.2)]"
                asChild
            >
                <Link href={`/search?${searchParams.toString()}`}>Ayo cari</Link>
            </Button>
        </section>
    );
}
