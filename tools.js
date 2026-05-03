import { tool } from "@langchain/core/tools";
import { z } from "zod";

const BASE = process.env.BASE_URL;
const API_KEY = process.env.API_KEY;

export const getOrders = tool(

    async () => {
        const res = await fetch (`${BASE}/orders`, {
            headers: {
                "x-api-key": API_KEY,
            },
        });
        if (!res.ok) throw new Error("Failed to get the orders");
        return JSON.stringify(await res.json());
    },
    {
        name: "getOrders",
        description: "Fetch all order",
        schema: z.object(),
    }
);

export const deleteOrder = tool(

    async ({order_id}) => {
        const res = await fetch (`${BASE}/orders/${encodeURIComponent(order_id)}`, {
            method: "DELETE",
            headers: {
                "x-api-key": API_KEY,
            },
        });
        if (!res.ok) {
            const msg = await res.text();
            throw new Error(`Delete failed: ${msg}`);
        }
        return `Order deleted succesfully`;
    },
    {
        name: "deleteOrder",
        description: "Delete any order using order_id",
        schema: z.object({
            order_id: z.string(),
        }),
    }
);

export const tools = [getOrders, deleteOrder];
