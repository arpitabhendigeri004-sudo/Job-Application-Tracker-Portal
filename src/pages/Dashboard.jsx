import { useEffect, useState } from "react";
import API from "../services/api";
import {
  FaBriefcase,
  FaSearch,
  FaCheckCircle,
  FaTimesCircle,
  FaUserTie,
  FaRocket,
} from "react-icons/fa";

export default function Dashboard() {
  const [jobs, setJobs] = useState([]);
  const [companyName, setCompanyName] = useState("");
  const [role, setRole] = useState("");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const token = localStorage.getItem("token");

  const fetchJobs = async () => {
    try {
      const res = await API.get("/jobs", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setJobs(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const addJob = async () => {
    if (!companyName || !role) {
      alert("Fill all fields");
      return;
    }

    try {
      await API.post(
        "/jobs",
        {
          companyName,
          role,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setCompanyName("");
      setRole("");

      fetchJobs();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteJob = async (id) => {
    try {
      await API.delete(`/jobs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchJobs();
    } catch (err) {
      console.log(err);
    }
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.companyName
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      job.role
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || job.status === filter;

    return matchesSearch && matchesFilter;
  });

  const appliedCount = jobs.filter(
    (j) => j.status === "Applied"
  ).length;

  const interviewCount = jobs.filter(
    (j) => j.status === "Interview"
  ).length;

  const offerCount = jobs.filter(
    (j) => j.status === "Offer"
  ).length;

  const rejectedCount = jobs.filter(
    (j) => j.status === "Rejected"
  ).length;

  const progress =
    jobs.length === 0
      ? 0
      : Math.round(
          ((offerCount + interviewCount) /
            jobs.length) *
            100
        );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-800 to-indigo-900 text-white">

      <div className="max-w-7xl mx-auto p-6">

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <div>
            <h1 className="text-5xl font-bold">
              🚀 Job Tracker Portal
            </h1>

            <p className="text-gray-300 mt-2">
              Track your applications like a pro
            </p>
          </div>

          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/";
            }}
            className="bg-red-500 px-5 py-3 rounded-xl"
          >
            Logout
          </button>

        </div>

        {/* Motivation */}

        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-3xl mb-8 border border-white/20">
          <h2 className="text-3xl font-bold mb-2">
            💡 Daily Motivation
          </h2>

          <p className="text-gray-200">
            Every application takes you one step closer
            to your dream job. Keep applying! 🚀
          </p>
        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-4 gap-5 mb-8">

          <div className="bg-purple-500/20 p-6 rounded-3xl backdrop-blur-lg">
            <FaBriefcase size={30} />
            <h3 className="mt-3">Applications</h3>
            <p className="text-4xl font-bold">
              {jobs.length}
            </p>
          </div>

          <div className="bg-blue-500/20 p-6 rounded-3xl backdrop-blur-lg">
            <FaRocket size={30} />
            <h3 className="mt-3">Applied</h3>
            <p className="text-4xl font-bold">
              {appliedCount}
            </p>
          </div>

          <div className="bg-yellow-500/20 p-6 rounded-3xl backdrop-blur-lg">
            <FaUserTie size={30} />
            <h3 className="mt-3">Interview</h3>
            <p className="text-4xl font-bold">
              {interviewCount}
            </p>
          </div>

          <div className="bg-green-500/20 p-6 rounded-3xl backdrop-blur-lg">
            <FaCheckCircle size={30} />
            <h3 className="mt-3">Offers</h3>
            <p className="text-4xl font-bold">
              {offerCount}
            </p>
          </div>

        </div>

        {/* Progress */}

        <div className="bg-white/10 p-6 rounded-3xl mb-8 backdrop-blur-lg">

          <h2 className="text-2xl font-bold mb-4">
            📈 Application Progress
          </h2>

          <div className="w-full bg-gray-700 rounded-full h-5">
            <div
              className="bg-green-500 h-5 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <p className="mt-3">
            Progress Score: {progress}%
          </p>

        </div>

        {/* Add Job */}

        <div className="bg-white text-black p-6 rounded-3xl mb-8">

          <h2 className="text-2xl font-bold mb-4">
            ✨ Add Application
          </h2>

          <div className="grid md:grid-cols-3 gap-4">

            <input
              className="border p-4 rounded-xl"
              placeholder="Company Name"
              value={companyName}
              onChange={(e) =>
                setCompanyName(e.target.value)
              }
            />

            <input
              className="border p-4 rounded-xl"
              placeholder="Role"
              value={role}
              onChange={(e) =>
                setRole(e.target.value)
              }
            />

            <button
              onClick={addJob}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl"
            >
              Add Job
            </button>

          </div>

        </div>

        {/* Search & Filter */}

        <div className="grid md:grid-cols-2 gap-4 mb-8">

          <div className="relative">

            <FaSearch className="absolute left-4 top-5 text-gray-400" />

            <input
              className="w-full p-4 pl-12 rounded-xl text-black"
              placeholder="Search Company or Role..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>

          <select
            className="p-4 rounded-xl text-black"
            value={filter}
            onChange={(e) =>
              setFilter(e.target.value)
            }
          >
            <option>All</option>
            <option>Applied</option>
            <option>Interview</option>
            <option>Offer</option>
            <option>Rejected</option>
          </select>

        </div>

        {/* Job Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {filteredJobs.map((job) => (
            <div
              key={job._id}
              className="bg-white text-black p-6 rounded-3xl shadow-xl hover:scale-105 transition"
            >

              <h2 className="text-2xl font-bold">
                🏢 {job.companyName}
              </h2>

              <p className="text-gray-600 mt-2">
                {job.role}
              </p>

              <div className="mt-4">

                <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full">
                  {job.status}
                </span>

              </div>

              <button
                onClick={() =>
                  deleteJob(job._id)
                }
                className="w-full mt-5 bg-red-500 text-white py-3 rounded-xl"
              >
                Delete
              </button>

            </div>
          ))}

        </div>

        {/* Recent Activity */}

        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-3xl mt-8">

          <h2 className="text-2xl font-bold mb-4">
            🕒 Recent Activity
          </h2>

          {jobs.slice(0, 5).map((job) => (
            <p key={job._id} className="mb-2">
              {job.companyName} - {job.role}
            </p>
          ))}

        </div>

      </div>

    </div>
  );
}