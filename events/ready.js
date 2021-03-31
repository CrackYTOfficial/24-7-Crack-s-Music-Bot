module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
  await client.user.setActivity("CrackYTOfficial on youtube",{ 
    type: "WATCHING",
    url: "https://www.youtube.com/channel/UCJnUlDLXuH24_V9VkOXxEJQ"
    });
};