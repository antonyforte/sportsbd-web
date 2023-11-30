/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    nextConfig,
    env: {
        APIKEY: process.env.APIKEY,
        SEARCHENGINEID: process.env.SEARCHENGINEID,
    },

}
