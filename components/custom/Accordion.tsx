// "use client"
// import * as React from "react";
// import * as AccordionPrimitive from "@radix-ui/react-accordion";

// import { Plus, Minus } from "lucide-react"; // Import Plus and Minus icons

// import { cn } from "@/lib/utils";

// const Accordion = AccordionPrimitive.Root;

// const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
//   <AccordionPrimitive.Item
//     ref={ref}
//     className={cn("border-b", className)}
//     {...props}
//   />
// ));
// AccordionItem.displayName = "AccordionItem";

// const AccordionTrigger = React.forwardRef(
//   ({ className, children, ...props }, ref) => (
//     <AccordionPrimitive.Header className="flex">
//       <AccordionPrimitive.Trigger
//         ref={ref}
//         className={cn(
//           "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline",
//           className
//         )}
//         {...props}
//       >
//         {children}
//         {/* Use conditional rendering based on data-state */}
//         {props["data-state"] === "open" ? (
//           <Minus className="h-4 w-4 shrink-0 transition-transform duration-200" />
//         ) : (
//           <Plus className="h-4 w-4 shrink-0 transition-transform duration-200" />
//         )}
//       </AccordionPrimitive.Trigger>
//     </AccordionPrimitive.Header>
//   )
// );
// AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

// const AccordionContent = React.forwardRef(
//   ({ className, children, ...props }, ref) => (
//     <AccordionPrimitive.Content
//       ref={ref}
//       className="overflow-hidden text-sm transition-all"
//       {...props}
//     >
//       <div className={cn("pb-4 pt-0", className)}>{children}</div>
//     </AccordionPrimitive.Content>
//   )
// );

// AccordionContent.displayName = AccordionPrimitive.Content.displayName;

// export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
