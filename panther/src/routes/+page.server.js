/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {
	const res = await fetch('https://cms-staffscc.cloud.contensis.com/api/delivery/projects/testingJosh/nodes/main/sublayer/joshs-test-site',{ headers: {"Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjAzeGVlcHRzYTNFd2dHVC10dFZFOEkzRUpXTSIsImtpZCI6IjAzeGVlcHRzYTNFd2dHVC10dFZFOEkzRUpXTSJ9.eyJpc3MiOiJodHRwczovL2Ntcy1zdGFmZnNjYy5jbG91ZC5jb250ZW5zaXMuY29tL2F1dGhlbnRpY2F0ZSIsImF1ZCI6Imh0dHBzOi8vY21zLXN0YWZmc2NjLmNsb3VkLmNvbnRlbnNpcy5jb20vYXV0aGVudGljYXRlL3Jlc291cmNlcyIsImV4cCI6MTcwMTA3ODY4MywibmJmIjoxNzAxMDc1MDgzLCJjbGllbnRfaWQiOiJhNjU4N2JmNy0yMTlkLTQyYzAtYjYzMy1jNTBiZjljODk3MWIiLCJjbGllbnRfc3ViIjoiYTY1ODdiZjctMjE5ZC00MmMwLWI2MzMtYzUwYmY5Yzg5NzFiIiwiY2xpZW50X3VzZXJuYW1lIjoidGVzdGluZ0pvc2giLCJzY29wZSI6WyJFbnRyeV9SZWFkIiwiUHJvamVjdF9SZWFkIl19.hvrGWBvO897bhMsQN7lhjAe37J5A2ctkMJp_tSOBGaLLyiTCYGO3gxHvlJHt3YGI6As5lp0DCDANQlG15YoVH1whXNdHKR7poTBFf-jtggDMOqgI_R9WNBY4HfH4PFCZeVJNrsSTGiJxv2y7esLG6o46IoB_w9SF5miTgEFewgUWUATiPcIjW5H8oH2rwzTApQvWdZaFLqlVa-wYYVk4DCA8v_ItXDXuq51GYI2jjeNgKVv1FKgRCl-ocoX6-kEpfjxVnD7i3oAz57eLQvK0jvrXR8VW9aRkSRo2CXc272Ucj7Erg1EHkCAmwHVCfv5-lcvy8M8MWZV3wXoNLvM_6g" }});
    const item = await res.json();
	return { item };
}