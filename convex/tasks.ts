import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getTasks = query({
  args: { query: v.optional(v.string()) },
  handler: async (ctx, args) => {
    const result = await ctx.db.query('tasks')
    .collect();

    const filtered = result.filter(item =>
      item.text.toLocaleLowerCase().includes(args.query?.toLocaleLowerCase() || '')
    )

    return filtered;
  },
});

export const createTask = mutation({
  args: { isCompleted: v.boolean(), text: v.string() },
  handler: async (ctx, args) => {
    await ctx.db.insert('tasks', { 
      isCompleted: args.isCompleted, 
      text: args.text
    })
  },
});

export const deleteTask = mutation({
  args: { id: v.id('tasks')},
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});